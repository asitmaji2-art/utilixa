'use client';

import React, { useState } from 'react';
import { RefreshCw, Download, FileText, ArrowRightLeft, FileCode, Database, FileSpreadsheet, File } from 'lucide-react';
import ProgressRing from '@/components/ui/ProgressRing';
import MagneticButton from '@/components/ui/MagneticButton';
import { formatBytes } from '@/lib/utils';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import { Document, Packer, Paragraph, TextRun } from 'docx';

type Category = 'image' | 'document' | 'data';

export default function FileConverterTool() {
  const [category, setCategory] = useState<Category>('image');

  // File Upload State
  const [file, setFile] = useState<File | null>(null);
  const [convertedUrl, setConvertedUrl] = useState<string | null>(null);
  const [convertedName, setConvertedName] = useState<string>('');
  const [convertedSize, setConvertedSize] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [statusMsg, setStatusMsg] = useState<string>('');

  // Selected conversion options
  const [imgFormat, setImgFormat] = useState<'png' | 'jpeg' | 'webp' | 'gif' | 'bmp'>('png');
  const [docFormat, setDocFormat] = useState<'pdf-to-docx' | 'docx-to-pdf' | 'img-to-pdf' | 'docx-to-txt' | 'txt-to-docx'>('docx-to-pdf');
  const [dataFormat, setDataFormat] = useState<'csv-to-xlsx' | 'xlsx-to-csv' | 'csv-to-json' | 'json-to-csv' | 'xlsx-to-json'>('csv-to-xlsx');

  // Interactive Text / Data Preview
  const [inputText, setInputText] = useState<string>(
    'id,name,role,department\n1,Alex,Developer,Engineering\n2,Sarah,Designer,Product\n3,Rahul,Manager,Operations'
  );
  const [convertedText, setConvertedText] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      setFile(selected);
      setConvertedUrl(null);
      runConversion(selected);
    }
  };

  const runConversion = async (inputFile: File) => {
    setIsProcessing(true);
    setProgress(20);
    setStatusMsg('Parsing file structure client-side...');

    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 90 ? 90 : prev + 20));
    }, 200);

    try {
      if (category === 'image') {
        // IMAGE CONVERSION
        const reader = new FileReader();
        reader.onload = (ev) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');

            if (ctx) {
              if (imgFormat === 'jpeg') {
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
              }
              ctx.drawImage(img, 0, 0);

              const mimeType = imgFormat === 'jpeg' ? 'image/jpeg' : `image/${imgFormat}`;
              canvas.toBlob(
                (blob) => {
                  if (blob) {
                    setConvertedSize(blob.size);
                    const ext = imgFormat === 'jpeg' ? 'jpg' : imgFormat;
                    setConvertedName(`${baseName(inputFile.name)}.${ext}`);
                    setConvertedUrl(URL.createObjectURL(blob));
                  }
                  setProgress(100);
                  setIsProcessing(false);
                  clearInterval(timer);
                },
                mimeType,
                0.95
              );
            }
          };
          img.src = ev.target?.result as string;
        };
        reader.readAsDataURL(inputFile);
      } else if (category === 'document') {
        // DOCUMENT CONVERSION
        if (docFormat === 'docx-to-pdf' || docFormat === 'txt-to-docx') {
          const text = await inputFile.text();
          if (docFormat === 'docx-to-pdf') {
            const doc = new jsPDF();
            const lines = doc.splitTextToSize(text || 'Converted Document Content', 180);
            doc.text(lines, 10, 10);
            const pdfBlob = doc.output('blob');
            setConvertedSize(pdfBlob.size);
            setConvertedName(`${baseName(inputFile.name)}.pdf`);
            setConvertedUrl(URL.createObjectURL(pdfBlob));
          } else {
            // TXT to DOCX
            const docxFile = new Document({
              sections: [
                {
                  properties: {},
                  children: text.split('\n').map(
                    (line) =>
                      new Paragraph({
                        children: [new TextRun(line)],
                      })
                  ),
                },
              ],
            });
            const blob = await Packer.toBlob(docxFile);
            setConvertedSize(blob.size);
            setConvertedName(`${baseName(inputFile.name)}.docx`);
            setConvertedUrl(URL.createObjectURL(blob));
          }
        } else if (docFormat === 'img-to-pdf') {
          const reader = new FileReader();
          reader.onload = (ev) => {
            const imgData = ev.target?.result as string;
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 10, 10, 190, 0);
            const pdfBlob = pdf.output('blob');
            setConvertedSize(pdfBlob.size);
            setConvertedName(`${baseName(inputFile.name)}.pdf`);
            setConvertedUrl(URL.createObjectURL(pdfBlob));
          };
          reader.readAsDataURL(inputFile);
        } else {
          // Fallback text conversion
          const text = await inputFile.text();
          const blob = new Blob([text], { type: 'text/plain' });
          setConvertedSize(blob.size);
          setConvertedName(`${baseName(inputFile.name)}.txt`);
          setConvertedUrl(URL.createObjectURL(blob));
        }
        setProgress(100);
        setIsProcessing(false);
        clearInterval(timer);
      } else if (category === 'data') {
        // SPREADSHEET / DATA CONVERSION USING XLSX
        const arrayBuffer = await inputFile.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];

        if (dataFormat === 'csv-to-xlsx' || dataFormat === 'xlsx-to-csv') {
          if (dataFormat === 'csv-to-xlsx') {
            const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
            const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            setConvertedSize(blob.size);
            setConvertedName(`${baseName(inputFile.name)}.xlsx`);
            setConvertedUrl(URL.createObjectURL(blob));
          } else {
            const csvText = XLSX.utils.sheet_to_csv(worksheet);
            const blob = new Blob([csvText], { type: 'text/csv' });
            setConvertedSize(blob.size);
            setConvertedName(`${baseName(inputFile.name)}.csv`);
            setConvertedUrl(URL.createObjectURL(blob));
          }
        } else {
          // JSON output
          const jsonArray = XLSX.utils.sheet_to_json(worksheet);
          const jsonStr = JSON.stringify(jsonArray, null, 2);
          setConvertedText(jsonStr);
          const blob = new Blob([jsonStr], { type: 'application/json' });
          setConvertedSize(blob.size);
          setConvertedName(`${baseName(inputFile.name)}.json`);
          setConvertedUrl(URL.createObjectURL(blob));
        }
        setProgress(100);
        setIsProcessing(false);
        clearInterval(timer);
      }
    } catch (err: any) {
      console.error(err);
      setStatusMsg('Conversion error: ' + (err.message || 'Invalid format'));
      setIsProcessing(false);
      clearInterval(timer);
    }
  };

  const baseName = (filename: string) => {
    return filename.substring(0, filename.lastIndexOf('.')) || filename;
  };

  return (
    <div className="space-y-6">
      {/* Category Navigation Tabs */}
      <div className="flex justify-center border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <button
            onClick={() => {
              setCategory('image');
              setFile(null);
              setConvertedUrl(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              category === 'image'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            <ArrowRightLeft className="w-3.5 h-3.5" /> Image Converters
          </button>

          <button
            onClick={() => {
              setCategory('document');
              setFile(null);
              setConvertedUrl(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              category === 'document'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            <FileText className="w-3.5 h-3.5" /> Document Converters (PDF/DOCX)
          </button>

          <button
            onClick={() => {
              setCategory('data');
              setFile(null);
              setConvertedUrl(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              category === 'data'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" /> Data & Spreadsheet (CSV/XLSX/JSON)
          </button>
        </div>
      </div>

      {/* File Upload Workspace */}
      <div className="glass-panel p-8 rounded-3xl space-y-6 border border-slate-200/80 dark:border-slate-800/80 max-w-2xl mx-auto text-center">
        {!file ? (
          <label className="relative flex flex-col items-center justify-center p-12 rounded-3xl border-2 border-dashed border-blue-500/30 hover:border-blue-400 bg-slate-50/50 dark:bg-slate-900/30 cursor-pointer transition-all duration-300 group hover:shadow-xl hover:shadow-blue-500/10">
            <input type="file" onChange={handleFileChange} className="hidden" />
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <File className="w-8 h-8 animate-bounce" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
              Upload File for {category.toUpperCase()} Conversion
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-center max-w-sm">
              100% free client-side conversion. Supports PDF, DOCX, XLSX, CSV, JSON, PNG, JPG, and WebP formats.
            </p>
            <span className="mt-4 px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-600/30">
              Select File
            </span>
          </label>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 pb-4">
              <div>
                <h4 className="font-bold text-slate-800 dark:text-slate-200">{file.name}</h4>
                <p className="text-xs text-slate-500 font-mono">Size: {formatBytes(file.size)}</p>
              </div>
              <button
                onClick={() => {
                  setFile(null);
                  setConvertedUrl(null);
                }}
                className="text-xs text-slate-500 hover:text-red-500 flex items-center gap-1 font-semibold"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Change File
              </button>
            </div>

            {/* Target Options Bar */}
            {category === 'image' && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Target Image Format</label>
                <div className="grid grid-cols-5 gap-2">
                  {(['png', 'jpeg', 'webp', 'gif', 'bmp'] as const).map((fmt) => (
                    <button
                      key={fmt}
                      type="button"
                      onClick={() => {
                        setImgFormat(fmt);
                        if (file) runConversion(file);
                      }}
                      className={`py-2 rounded-xl text-xs font-bold uppercase transition-all ${
                        imgFormat === fmt
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {category === 'document' && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Document Conversion Mode</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'docx-to-pdf', label: 'DOCX / Text to PDF' },
                    { id: 'txt-to-docx', label: 'TXT to DOCX' },
                    { id: 'img-to-pdf', label: 'Image to PDF' },
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => {
                        setDocFormat(mode.id as any);
                        if (file) runConversion(file);
                      }}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                        docFormat === mode.id
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {category === 'data' && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Spreadsheet Conversion Mode</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'csv-to-xlsx', label: 'CSV to XLSX Excel' },
                    { id: 'xlsx-to-csv', label: 'XLSX Excel to CSV' },
                    { id: 'xlsx-to-json', label: 'XLSX / CSV to JSON' },
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => {
                        setDataFormat(mode.id as any);
                        if (file) runConversion(file);
                      }}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                        dataFormat === mode.id
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Progress & Output Download */}
            {isProcessing ? (
              <ProgressRing progress={progress} label={statusMsg || 'Converting file...'} />
            ) : convertedUrl ? (
              <div className="pt-4 space-y-3">
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                  ✓ Converted File Size: {formatBytes(convertedSize)}
                </div>
                <MagneticButton
                  onClick={() => {
                    const a = document.createElement('a');
                    a.href = convertedUrl;
                    a.download = convertedName;
                    a.click();
                  }}
                  variant="glow"
                  className="w-full"
                >
                  <Download className="w-4 h-4" />
                  <span>Download {convertedName}</span>
                </MagneticButton>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
