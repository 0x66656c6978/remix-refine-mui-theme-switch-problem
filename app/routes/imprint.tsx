import { Container, Typography } from "@pankod/refine-mui";
import { Header, Layout } from "~/components/layout";

export default function Imprint() {
    return (
        <Layout>
    	    <Typography variant="h1">Impressum</Typography>
            <Typography variant="h3">Haftungsausschluss</Typography>
            <Typography variant="body1">Die auf dieser Website bereitgestellten Informationen werden sorgfältig geprüft und regelmäßig aktualisiert. Dennoch können wir keine Gewähr für die Vollständigkeit, Richtigkeit und Aktualität der bereitgestellten Informationen übernehmen.</Typography>
            <Typography variant="body1">Alle Angebote sind freibleibend und unverbindlich. Wir behalten uns das Recht vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.</Typography>
            <Typography variant="h3">Haftung für Links</Typography>
            <Typography variant="body1">Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</Typography>
            <Typography variant="h3">Urheberrecht</Typography>
            <Typography variant="body1">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</Typography>
            <Typography variant="body1">Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.</Typography>
            <Typography variant="body1">Achtung: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</Typography>
            <Typography variant="h3">Datenschutz</Typography>
            <Typography variant="body1">Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.</Typography>
            <Typography variant="body1">Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte</Typography>
        </Layout>
    );
}