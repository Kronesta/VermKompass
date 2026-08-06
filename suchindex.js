alert("Suchindex läuft");

const suchIndex = [

{
titel:"Vermessung allgemein",
seite:"grundlagen.html",
begriffe:"Vermessung Vermessungstechniker Aufgaben Außendienst Innendienst Messung Aufnahme Punkt Grenze Gebäude Fläche Karte Plan Dokumentation"
},

{
titel:"Koordinatensysteme",
seite:"grundlagen.html",
begriffe:"UTM Gauß-Krüger ETRS89 EPSG Lagebezug Höhenbezug Koordinaten Ostwert Nordwert Rechtswert Hochwert DHHN2016 NHN"
},

{
titel:"GNSS und SAPOS",
seite:"grundlagen.html",
begriffe:"GNSS GPS Galileo GLONASS BeiDou Satellit Vermessung RTK NRTK SAPOS HEPS Korrekturdaten Genauigkeit Zentimeter"
},

{
titel:"Transformationen",
seite:"grundlagen.html",
begriffe:"Transformation Verkettete Transformation Koordinatentransformation Bezugssystem Ausgangssystem Zielsystem EPSG UTM Gauß-Krüger"
},

{
titel:"VermCAD",
seite:"vermcad.html",
begriffe:"VermCAD Vermessung Projekt Punkt Datenimport Koordinaten Berechnung Konstruktion Zeichnung Auswertung Export MWT NV GF EV"
},

{
titel:"Grenzpunkt bestimmen",
seite:"grenzpunkt.html",
begriffe:"Grenzpunkt bestimmen Punkt Grenzfeststellung Koordinate Passpunkt Vermessung Grenze"
},

{
titel:"Grenzpunkt berichtigen",
seite:"grenzpunkt_berichtigen.html",
begriffe:"Grenzpunkt berichtigen Korrektur Koordinate Verschiebung Grenze Kataster"
},

{
titel:"Gebäudepunkte",
seite:"gebaeudepunkte.html",
begriffe:"Gebäude Gebäudepunkt Aufnahme Bauwerk Punktmessung Vermessung"
},

{
titel:"Vermessungsdokumentation",
seite:"vermessungsdokumentation.html",
begriffe:"Dokumentation Vermessung Nachweis Bericht Unterlagen Riss Messung Auswertung"
},

{
titel:"DMS-Karibu Grundlagen",
seite:"dmskaribu_grundlagen.html",
begriffe:"DMS Karibu Dokumentenmanagement Liegenschaftskataster Akten Verwaltung Recherche Vorgänge"
},

{
titel:"DMS-Karibu Anmeldung",
seite:"dmskaribu_anmeldung.html",
begriffe:"Anmeldung Benutzer Nutzer Passwort Zugang Oberfläche Login"
},

{
titel:"DMS-Karibu Oberfläche",
seite:"dmskaribu_oberflaeche.html",
begriffe:"Oberfläche Widget Kopfleiste Seitenleiste Kartenfenster Suche Menü"
},

{
titel:"DMS-Karibu Recherche",
seite:"dmskaribu_recherche.html",
begriffe:"Recherche Suche Dokument finden Akten Vorgang Flurstück"
},

{
titel:"DMS-Karibu Dokumente",
seite:"dmskaribu_dokumente.html",
begriffe:"Dokumente öffnen verwalten speichern PDF Unterlagen"
},

{
titel:"DMS-Karibu Geosieb",
seite:"dmskaribu_geosieb.html",
begriffe:"Geosieb Karte Flurstück Lage Darstellung Geometrie"
},

{
titel:"CARLO",
seite:"carlo.html",
begriffe:"CARLO Vorgang Dokument Antrag Bearbeitung Kataster"
},

{
titel:"GEOgraf",
seite:"geograf.html",
begriffe:"GEOgraf Grafik Zeichnung Plan Darstellung Vermessung"
},

{
titel:"Glossar",
seite:"glossar.html",
begriffe:"Fachbegriffe Definition Erklärung Vermessung ALKIS SAPOS GNSS"
},

{
titel:"VermCAD Verkettete Transformation",
seite:"vermcad_transformation.html",
begriffe:"Verkettete Transformation Passpunkte Lagestatus MWT Ausgangssystem Zielsystem Koordinaten Zwischensystem"
},

{
titel:"VermCAD Grundlagen",
seite:"vermcad_grundlagen.html",
begriffe:"VermCAD Grundlagen Software Vermessung Projekt Arbeitsablauf Punkt Koordinate Bezugssystem Transformation"
},

{
titel:"VermCAD Oberfläche",
seite:"vermcad_oberflaeche.html",
begriffe:"Oberfläche Menüleiste Symbolleisten Kartenfenster Projektbereich Eigenschaften Statusleiste Fenster"
},

{
titel:"VermCAD Projektverwaltung",
seite:"vermcad_projektverwaltung.html",
begriffe:"Projekt anlegen Projekteinstellungen Projektstruktur Speicherort Sicherung Projektverwaltung"
},

{
titel:"VermCAD Datenimport",
seite:"vermcad_daten.html",
begriffe:"Daten Import Datenimport Datei Punktdaten Messdaten Koordinaten Format Übergabe"
},

{
titel:"VermCAD Punkte",
seite:"vermcad_punkte.html",
begriffe:"Punkte Punkt Punktnummer Koordinaten Rechtswert Hochwert Höhe Grenzpunkt Gebäudepunkt Festpunkt Aufnahmepunkt"
},

{
titel:"VermCAD Berechnungen",
seite:"vermcad_berechnung.html",
begriffe:"Berechnung Auswertung Polarberechnung Orthogonalaufnahme Schnitt Flächenberechnung Koordinatenberechnung"
},

{
titel:"VermCAD Transformation",
seite:"vermcad_transformation.html",
begriffe:"Transformation Koordinatensystem Bezugssystem EPSG Lagestatus Passpunkte Restklaffen Ausgangssystem Zielsystem"
},

{
titel:"Verkettete Transformation",
seite:"vermcad_transformation.html",
begriffe:"Verkettete Transformation Zwischensystem mehrere Transformationen historische Daten lokale Systeme"
},

{
titel:"VermCAD Export",
seite:"vermcad_export.html",
begriffe:"Export Ausgabe Datenübergabe Datei Koordinatenliste Austauschformat Dokumentation"
},

{
titel:"VermCAD ALKIS",
seite:"vermcad_alkis.html",
begriffe:"ALKIS Liegenschaftskataster Flurstück Grenze Gebäude Nutzung Katasterdaten"
},

{
titel:"VermCAD Optionen",
seite:"vermcad_optionen.html",
begriffe:"Optionen Einstellungen Darstellung Koordinaten Arbeitsumgebung Speicher Einstellungen"
},

{
titel:"VermCAD Fehlerdatenbank",
seite:"vermcad_fehler.html",
begriffe:"Fehler Fehlermeldung Problem Lösung Ursache Passpunkte nicht möglich Punkte nicht sichtbar"
},

{
titel:"Keine Passpunkte vorhanden",
seite:"vermcad_fehler.html",
begriffe:"Keine Passpunkte Transformation nicht möglich Passpunkte fehlen"
},

{
titel:"Punkte werden nicht angezeigt",
seite:"vermcad_fehler.html",
begriffe:"Punkte sichtbar Anzeige Kartenfenster Ausschnitt Zoom Darstellung"
},

{
titel:"Punkte liegen falsch",
seite:"vermcad_fehler.html",
begriffe:"Punkte falsch weit entfernt Koordinaten falsch Lagestatus EPSG"
},

{
titel:"Datenimport Fehler",
seite:"vermcad_fehler.html",
begriffe:"Import Fehler Daten fehlen falsche Datei falsches Format"
},

{
titel:"Grenzpunkte",
seite:"vermcad_punkte.html",
begriffe:"Grenzpunkt Grenze Flurstück Kataster Punkt"
},

{
titel:"Koordinatensysteme",
seite:"grundlagen.html",
begriffe:
"UTM Gauß-Krüger ETRS89 EPSG Koordinatensystem Lagebezug Höhenbezug"
}

];
