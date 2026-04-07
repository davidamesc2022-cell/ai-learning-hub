import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Download, Loader2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CertificateGeneratorProps {
    studentName: string;
    courseName: string;
    issueDate: string;
}

export default function CertificateGenerator({
    studentName,
    courseName,
    issueDate
}: CertificateGeneratorProps) {
    const certificateRef = useRef<HTMLDivElement>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    const generatePDF = async () => {
        if (!certificateRef.current) return;

        setIsGenerating(true);
        try {
            // Configuramos html2canvas para que capture bien aunque esté escalado
            const canvas = await html2canvas(certificateRef.current, {
                scale: 3, // Alta calidad
                useCORS: true,
                backgroundColor: "#ffffff",
            });

            const imgData = canvas.toDataURL("image/jpeg", 1.0);

            // Formato apaisado (landscape) A4
            const pdf = new jsPDF("l", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(`Certificado_${courseName.replace(/\s+/g, "_")}.pdf`);
        } catch (error) {
            console.error("Error generating certificate:", error);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="flex flex-col items-center gap-6">
            <Button
                onClick={generatePDF}
                disabled={isGenerating}
                className="gradient-hero text-primary-foreground border-0 shadow-lg"
            >
                {isGenerating ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generando PDF...</>
                ) : (
                    <><Download className="mr-2 h-4 w-4" /> Descargar Certificado PDF</>
                )}
            </Button>

            {/* Contenedor del certificado visible pero escalado para que quepa en pantalla */}
            <div className="w-full overflow-hidden flex justify-center bg-muted/30 p-4 rounded-xl border border-border">
                {/* Usamos un contenedor con zoom para previsualizarlo sin ocupar toda la pantalla */}
                <div
                    className="relative origin-top transform scale-50 sm:scale-75 md:scale-100 shadow-2xl"
                    style={{ width: "800px", height: "600px", flexShrink: 0 }}
                >
                    {/* Este div es el que realmente capturamos */}
                    <div
                        ref={certificateRef}
                        className="absolute inset-0 bg-background text-foreground flex flex-col items-center justify-center p-16 border-[12px] border-double border-primary/20 round-xl"
                        style={{
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                        }}
                    >
                        {/* Logo de la academia */}
                        <div className="absolute top-12 flex flex-col items-center">
                            <div className="h-16 w-16 bg-primary text-primary-foreground flex items-center justify-center text-3xl font-black rounded-2xl mb-2 shadow-lg">
                                DA
                            </div>
                            <h2 className="text-xl font-bold uppercase tracking-widest text-primary/80">David Ames Academy</h2>
                        </div>

                        {/* Cintas decorativas */}
                        <div className="absolute top-0 left-0 w-32 h-32 border-t-[12px] border-l-[12px] border-primary/40 rounded-tl-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-[12px] border-r-[12px] border-primary/40 rounded-br-3xl"></div>

                        <p className="text-xl italic text-muted-foreground mt-16 mb-6">CERTIFICADO DE FINALIZACIÓN</p>
                        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Otorgado a</p>

                        <h1 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 border-b-2 border-primary/20 pb-4 px-12 text-center w-full">
                            {studentName}
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-lg text-center leading-relaxed">
                            Por haber completado satisfactoriamente todos los requisitos y módulos del curso estructurado:
                        </p>

                        <h2 className="text-2xl font-bold my-6 text-center max-w-xl">
                            {courseName}
                        </h2>

                        <div className="absolute bottom-16 w-full px-24 flex justify-between items-end">
                            <div className="text-center">
                                <p className="text-sm font-medium border-b border-muted-foreground/30 pb-1 w-32 mx-auto">{issueDate}</p>
                                <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">Fecha de Emisión</p>
                            </div>

                            <div className="text-center flex flex-col items-center">
                                <Award className="h-12 w-12 text-warning mb-2" />
                                <p className="text-[10px] text-muted-foreground font-mono">ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                            </div>

                            <div className="text-center">
                                <p className="text-sm font-medium italic border-b border-muted-foreground/30 pb-1 w-32 mx-auto" style={{ fontFamily: "cursive" }}>David Ames</p>
                                <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">Director</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
