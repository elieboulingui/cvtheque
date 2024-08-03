"use client";
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import Pdf from "./components/template/one/pdf/Pdf";

export default function Home() {

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
