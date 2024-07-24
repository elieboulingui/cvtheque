"use client";
import React, { useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import Pdf from "../app/components/Pdf";

export default function Home() {
  const [userInput, setUserInput] = useState("");



  return (
    <main className="w-screen h-screen">
      <View>
        <PDFViewer className="w-full h-full" showToolbar={false}>
          <Pdf  />
        </PDFViewer>
      </View>
    </main>
  );
}
