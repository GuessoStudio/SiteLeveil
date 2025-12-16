
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { NeuroJournalEntry, UserStats } from '../hooks/useNeuroJournal';
import { Insight } from './neuro-insights';

export const generatePDFReport = (entries: NeuroJournalEntry[], stats: UserStats, insights: Insight[]) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;

    // --- Header ---
    doc.setFillColor(79, 70, 229); // Indigo 600
    doc.rect(0, 0, pageWidth, 40, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('Rapport Neuro-Journal', 20, 25);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const dateStr = new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
    doc.text(`Généré le: ${new Date().toLocaleDateString('fr-FR')}`, 20, 35);

    // --- Summary Section ---
    let yPos = 60;

    doc.setTextColor(50, 50, 50);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Synthèse du mois', 20, yPos);

    yPos += 15;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Entrées enregistrées: ${entries.length}`, 20, yPos);
    doc.text(`Série actuelle: ${stats.streak} jours`, 100, yPos);

    // --- Insights Section ---
    if (insights.length > 0) {
        yPos += 20;
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text('Insights IA', 20, yPos);

        yPos += 10;
        insights.forEach(insight => {
            yPos += 10;

            // Color based on type
            if (insight.type === 'positive') doc.setTextColor(22, 163, 74); // Green
            else if (insight.type === 'warning') doc.setTextColor(220, 38, 38); // Red
            else doc.setTextColor(79, 70, 229); // Indigo

            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.text(`• ${insight.title}`, 20, yPos);

            yPos += 7;
            doc.setTextColor(80, 80, 80);
            doc.setFontSize(10);
            doc.setFont('helvetica', 'italic');
            const splitDesc = doc.splitTextToSize(insight.description, 170);
            doc.text(splitDesc, 25, yPos);
            yPos += splitDesc.length * 5;
        });
    }

    // --- Detail Table ---
    yPos += 20;
    doc.setTextColor(50, 50, 50);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Journal Détaillé', 20, yPos);

    const tableData = entries.map(e => [
        new Date(e.date).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' }),
        e.mood + '/10',
        e.sleepHours + 'h',
        e.energyPhysical + '/10',
        e.energyMental + '/10'
    ]);

    autoTable(doc, {
        startY: yPos + 10,
        head: [['Date', 'Humeur', 'Sommeil', 'E. Physique', 'E. Mentale']],
        body: tableData,
        theme: 'grid',
        headStyles: { fillColor: [79, 70, 229] },
        styles: { fontSize: 10 },
    });

    // Save
    doc.save(`neuro-journal-report-${new Date().toISOString().split('T')[0]}.pdf`);
};
