"use client";
import {View,PDFViewer } from '@react-pdf/renderer';
import Pdf from "../app/components/Pdf";
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
