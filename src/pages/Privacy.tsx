import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-serif font-bold mb-8">Datenschutzerklärung</h1>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-serif font-bold mb-4">1. Datenschutz auf einen Blick</h2>
                
                <h3 className="text-xl font-semibold mb-3">Allgemeine Hinweise</h3>
                <p className="text-foreground/80">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
                
                <h3 className="text-xl font-semibold mb-3">Datenschutz</h3>
                <p className="text-foreground/80">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                  Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen 
                  Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
                <p className="text-foreground/80 mt-4">
                  Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
                  Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. 
                  Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir 
                  sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
                <p className="text-foreground/80">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="text-foreground/80 mt-4">
                  Nordic-Automobile cnr GmbH<br />
                  Ellernreihe 59, c/o Lenart<br />
                  D-22179 Hamburg<br />
                  <br />
                  Telefon: +49 100 000 00<br />
                  E-Mail: kontakt@nordic.de
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4">3. Datenerfassung auf dieser Website</h2>
                
                <h3 className="text-xl font-semibold mb-3">Kontaktformular</h3>
                <p className="text-foreground/80">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                  der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                  wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="text-foreground/80 mt-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
                  sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                  vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die 
                  Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an 
                  uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung 
                  (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                </p>
                <p className="text-foreground/80 mt-4">
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns 
                  zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck 
                  für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). 
                  Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">Server-Log-Dateien</h3>
                <p className="text-foreground/80">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                  Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mt-2 space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="text-foreground/80 mt-4">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4">4. Ihre Rechte</h2>
                <p className="text-foreground/80">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und 
                  Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem 
                  ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine 
                  Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung 
                  jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten 
                  Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </p>
                <p className="text-foreground/80 mt-4">
                  Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
                <p className="text-foreground/80 mt-4">
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an 
                  uns wenden.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4">5. Cookies</h2>
                <p className="text-foreground/80">
                  Diese Website verwendet technisch notwendige Cookies, die für den Betrieb der Website 
                  erforderlich sind. Diese Cookies werden automatisch gelöscht, wenn Sie Ihren Browser 
                  schließen (Session-Cookies) oder nach einer definierten Zeit (temporäre Cookies).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold mb-4">6. Änderung dieser Datenschutzerklärung</h2>
                <p className="text-foreground/80">
                  Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie 
                  stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer 
                  Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt 
                  dann die neue Datenschutzerklärung.
                </p>
              </section>

              <section className="pt-8 border-t">
                <p className="text-sm text-muted-foreground">
                  Stand: Januar 2026
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
