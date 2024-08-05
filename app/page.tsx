"use client";
import React, { useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import Pdf from "./components/template/four/pdf/pdf";

export default function Home() {
  const [nom, setNom] = useState('');
  return (
    <main className="w-screen h-screen">
      <View>
        <PDFViewer className="w-full h-full" showToolbar={false}>
        <Pdf nom={nom} />
        </PDFViewer>
      </View>
    </main>
  );
}
