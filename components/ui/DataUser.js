import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { globalStyles } from "../globalStyles";
import { CustomCheckbox } from "./CustomCheckbox";
import { Button } from "./Button";
import { Camera } from "expo-camera";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DataUser = ({setRequest}) => {
    const [agree, setAgree] = useState(false)
    const [_, requestPermission] = Camera.useCameraPermissions();

    const onPressCheckBox = () => {
        setAgree(p => !p)
    }

    const onPressAccept = async () => {
        if (agree) {
            AsyncStorage.setItem('isAgree', "true")
            requestPermission().then(() => {
                setRequest(p => !p)
            })
        }
    }


    return <>
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.title}>Polityka prywatności Plantifi</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.defaultText}>
                    <Text style={styles.firstHeader}>Polityka prywatności{"\n"}</Text>
                    Niniejsza Polityka prywatności opisuje nasze zasady i procedury dotyczące gromadzenia, wykorzystywania i ujawniania Twoich danych podczas korzystania z Usługi oraz informuje Cię o Twoich prawach do prywatności oraz o tym, w jaki sposób prawo Cię chroni.
                    Używamy Twoich danych osobowych w celu świadczenia i ulepszania Usługi. Korzystając z Usługi, wyrażasz zgodę na gromadzenie i wykorzystywanie informacji zgodnie z niniejszą Polityką prywatności.
                    <Text style={styles.firstHeader}>{"\n"}Interpretacja i definicje{"\n"}</Text>
                    <Text style={styles.secHeader}>Interpretacja{"\n"}</Text>
                    Słowa, których pierwsza litera jest pisana wielką literą, mają znaczenie określone w następujących warunkach. Poniższe definicje mają takie samo znaczenie niezależnie od tego, czy występują w liczbie pojedynczej, czy mnogiej.
                    <Text style={styles.secHeader}>{"\n"}Definicje{"\n"}</Text>
                    Na potrzeby niniejszej Polityki prywatności:
                    <Text style={styles.strong}> {"\n"}  • Konto </Text>oznacza unikalne konto utworzone w celu uzyskania dostępu do naszej Usługi lub części naszej Usługi.
                    <Text style={styles.strong}> {"\n"}  • Podmiot stowarzyszony </Text>oznacza podmiot, który kontroluje, jest kontrolowany lub znajduje się pod wspólną kontrolą ze stroną, gdzie „kontrola” oznacza posiadanie co najmniej 50% udziałów, udziałów kapitałowych lub innych papierów wartościowych uprawniających do głosowania w wyborach dyrektorów lub innych organów zarządzających.
                    <Text style={styles.strong}> {"\n"}  • Aplikacja </Text>odnosi się do Plantifi, oprogramowania dostarczanego przez Spółkę lub osoby fizyczne.
                    <Text style={styles.strong}> {"\n"}  • Firma </Text>(zwana w niniejszej Umowie „Firmą”, „My”, „Nas” lub „Nasz”) odnosi się do Plantifi.
                    <Text style={styles.strong}> {"\n"}  • Kraj </Text>odnosi się do: Polski
                    <Text style={styles.strong}> {"\n"}  • Urządzenie </Text>oznacza dowolne urządzenie, które może uzyskać dostęp do Usługi, takie jak komputer, telefon komórkowy lub tablet cyfrowy.
                    <Text style={styles.strong}> {"\n"}  • Dane osobowe </Text>to wszelkie informacje dotyczące zidentyfikowanej lub możliwej do zidentyfikowania osoby fizycznej.
                    <Text style={styles.strong}> {"\n"}  • Usługa </Text>odnosi się do Aplikacji.
                    <Text style={styles.strong}> {"\n"}  • Usługodawca </Text>oznacza każdą osobę fizyczną lub prawną, która przetwarza dane w imieniu Spółki. Odnosi się do firm zewnętrznych lub osób zatrudnionych przez Firmę w celu ułatwienia Usługi, świadczenia Usługi w imieniu Firmy, świadczenia usług związanych z Usługą lub pomocy Firmie w analizie sposobu korzystania z Usługi.
                    <Text style={styles.strong}> {"\n"}  • Dane dotyczące użytkowania </Text>odnoszą się do danych zbieranych automatycznie, generowanych przez korzystanie z Usługi lub z samej infrastruktury Usługi (na przykład czas trwania wizyty w aplikacji, identyfikatory urządzenia).
                    <Text style={styles.strong}> {"\n"}  • Użytkownik </Text> oznacza odpowiednio osobę uzyskującą dostęp do Usługi lub korzystającą z niej, firmę lub inny podmiot prawny, w imieniu którego taka osoba uzyskuje dostęp do Usługi lub z niej korzysta.
                    <Text style={styles.firstHeader}>{"\n"}Gromadzenie i wykorzystywanie Twoich danych osobowych{"\n"}</Text>
                    <Text style={styles.secHeader}>Rodzaje zbieranych danych{"\n"}</Text>
                    <Text style={styles.thirdHeader}>{"\n"}Dane osobiste{"\n"}</Text>
                    Podczas korzystania z naszej Usługi możemy poprosić Cię o podanie nam pewnych danych osobowych, które mogą być wykorzystane do skontaktowania się z Tobą lub zidentyfikowania Ciebie. Dane osobowe mogą obejmować między innymi:
                    <Text style={styles.strong}> {"\n"}{"\n"}  • Dane dotyczące użytkowania {"\n"}</Text>
                    <Text style={styles.thirdHeader}>{"\n"}Dane dotyczące użytkowania{"\n"}</Text>
                    Dane dotyczące użytkowania są zbierane automatycznie podczas korzystania z Usługi. Dane o użytkowaniu mogą obejmować informacje, takie jak adres protokołu internetowego Twojego Urządzenia (np. adres IP), typ przeglądarki, wersja przeglądarki, odwiedzane przez Ciebie strony naszego Serwisu, czas i data Twojej wizyty, czas spędzony na tych stronach, unikalne urządzenie identyfikatory i inne dane diagnostyczne.
                    Kiedy uzyskujesz dostęp do Usługi za pośrednictwem urządzenia mobilnego, możemy automatycznie gromadzić pewne informacje, w tym między innymi rodzaj używanego urządzenia mobilnego, unikalny identyfikator urządzenia mobilnego, adres IP urządzenia mobilnego, numer telefonu system operacyjny, typ mobilnej przeglądarki internetowej, z której korzystasz, unikalne identyfikatory urządzenia i inne dane diagnostyczne.
                    Możemy również gromadzić informacje, które Twoja przeglądarka wysyła za każdym razem, gdy odwiedzasz naszą Usługę lub gdy uzyskujesz dostęp do Usługi za pośrednictwem urządzenia mobilnego.
                    <Text style={styles.thirdHeader}>{"\n"}{"\n"}Informacje zbierane podczas korzystania z Aplikacji{"\n"}</Text>
                    Podczas korzystania z Naszej Aplikacji, w celu zapewnienia funkcji Naszej Aplikacji, możemy gromadzić, za Twoją uprzednią zgodą:
                    <Text style={styles.strong}> {"\n"}{"\n"}  • Zdjęcia i inne informacje z aparatu i biblioteki zdjęć Twojego Urządzenia {"\n"}{"\n"}</Text>
                    Używamy tych informacji, aby udostępniać funkcje naszego Serwisu, ulepszać i dostosowywać Nasz Serwis. Informacje mogą zostać przesłane na serwery Spółki i/lub serwer Usługodawcy lub mogą być po prostu przechowywane na Twoim urządzeniu. W dowolnym momencie możesz włączyć lub wyłączyć dostęp do tych informacji w ustawieniach Twojego urządzenia.
                    <Text style={styles.secHeader}>{"\n"}{"\n"}Wykorzystanie Twoich danych osobowych{"\n"}</Text>
                    Firma może wykorzystywać Dane Osobowe do następujących celów:
                    <Text style={styles.strong}> {"\n"}  • Aby świadczyć i utrzymywać naszą Usługę </Text>, w tym monitorować korzystanie z naszej Usługi.
                    <Text style={styles.strong}> {"\n"}  • Aby zarządzać Twoim kontem: </Text> aby zarządzać Twoją rejestracją jako użytkownika Usługi. Podane przez Ciebie Dane Osobowe mogą zapewnić Ci dostęp do różnych funkcjonalności Serwisu, które są dostępne dla Ciebie jako zarejestrowanego użytkownika.
                    <Text style={styles.strong}> {"\n"}  • W celu wykonania umowy: </Text> opracowanie, przestrzeganie i podjęcie umowy zakupu produktów, przedmiotów lub usług, które kupiłeś lub jakiejkolwiek innej umowy z nami za pośrednictwem Usługi.
                    <Text style={styles.strong}> {"\n"}  • Aby skontaktować się z Tobą: </Text> aby skontaktować się z Tobą za pośrednictwem poczty elektronicznej, połączeń telefonicznych, SMS-ów lub innych równoważnych form komunikacji elektronicznej, takich jak powiadomienia push aplikacji mobilnej dotyczące aktualizacji lub wiadomości informacyjne związane z funkcjami, produktami lub zakontraktowanymi usługami, w tym aktualizacjami zabezpieczeń, gdy jest to konieczne lub uzasadnione dla ich realizacji.
                    <Text style={styles.strong}> {"\n"}  • Aby dostarczać Ci: </Text> wiadomości, oferty specjalne i ogólne informacje o innych oferowanych przez nas towarach, usługach i wydarzeniach, które są podobne do tych, które już kupiłeś lub o które pytałeś, chyba że zdecydowałeś się nie otrzymywać takich informacji.
                    <Text style={styles.strong}> {"\n"}  • Aby zarządzać Twoimi prośbami: </Text> Aby uczestniczyć i zarządzać Twoimi prośbami kierowanymi do nas.
                    <Text style={styles.strong}> {"\n"}  • Do innych celów: </Text> Możemy wykorzystywać Twoje dane do innych celów, takich jak analiza danych, identyfikacja trendów użytkowania, określanie skuteczności naszych kampanii promocyjnych oraz ocena i ulepszanie naszej Usługi, produktów, usług, marketingu i Twoich doświadczeń.{"\n"}
                    Możemy udostępniać Twoje dane osobowe w następujących sytuacjach:
                    <Text style={styles.strong}> {"\n"}  • Usługodawcom: </Text> Możemy udostępniać Twoje dane osobowe Usługodawcom w celu monitorowania i analizowania korzystania z naszej Usługi oraz kontaktowania się z Tobą.
                    <Text style={styles.strong}> {"\n"}  • Podmiotom stowarzyszonym: </Text> Możemy udostępniać Twoje dane naszym podmiotom stowarzyszonym, w takim przypadku będziemy wymagać od tych podmiotów stowarzyszonych przestrzegania niniejszej Polityki prywatności. Spółki stowarzyszone obejmują naszą spółkę macierzystą i wszelkie inne spółki zależne, partnerów joint venture lub inne firmy, które kontrolujemy lub które znajdują się pod wspólną kontrolą z nami.
                    <Text style={styles.strong}> {"\n"}  • Partnerom biznesowym: </Text> Możemy udostępniać Twoje dane naszym partnerom biznesowym, aby oferować Ci określone produkty, usługi lub promocje.
                    <Text style={styles.strong}> {"\n"}  • Za Twoją zgodą: </Text> Za Twoją zgodą możemy ujawnić Twoje dane osobowe w dowolnym innym celu.
                    <Text style={styles.secHeader}>{"\n"}{"\n"}Przechowywanie Twoich danych osobowych{"\n"}</Text>
                    Firma będzie przechowywać Twoje dane osobowe tylko tak długo, jak będzie to konieczne do celów określonych w niniejszej Polityce prywatności. Będziemy przechowywać i wykorzystywać Twoje dane osobowe w zakresie niezbędnym do wypełnienia naszych zobowiązań prawnych (na przykład, jeśli jesteśmy zobowiązani do zachowania danych w celu zachowania zgodności z obowiązującymi przepisami prawa), rozstrzygania sporów i egzekwowania naszych umów prawnych i zasad. 
                    Firma będzie również przechowywać Dane o użytkowaniu do celów analizy wewnętrznej. Dane dotyczące użytkowania są zasadniczo przechowywane przez krótszy okres czasu, z wyjątkiem sytuacji, gdy dane te są wykorzystywane do wzmocnienia bezpieczeństwa lub poprawy funkcjonalności naszej Usługi lub gdy jesteśmy prawnie zobowiązani do przechowywania tych danych przez dłuższy czas.
                    <Text style={styles.secHeader}>{"\n"}{"\n"}Przekazywanie Twoich danych osobowych{"\n"}</Text>
                    Twoje informacje, w tym Dane Osobowe, są przetwarzane w biurach operacyjnych Spółki oraz w innych miejscach, w których znajdują się strony zaangażowane w przetwarzanie. Oznacza to, że informacje te mogą być przesyłane — i przechowywane na — komputerach znajdujących się poza Twoim stanem, prowincją, krajem lub inną jurysdykcją rządową, w której przepisy dotyczące ochrony danych mogą różnić się od przepisów obowiązujących w Twojej jurysdykcji. 
                    Twoja zgoda na niniejszą Politykę prywatności, po której następuje przekazanie takich informacji, oznacza Twoją zgodę na ten transfer.
                    Firma podejmie wszelkie uzasadnione kroki, aby zapewnić, że Twoje dane są traktowane bezpiecznie i zgodnie z niniejszą Polityką prywatności, a żadne przekazanie Twoich danych osobowych nie będzie miało miejsca do organizacji lub kraju, chyba że istnieją odpowiednie kontrole, w tym bezpieczeństwo Twoje dane i inne dane osobowe.
                    <Text style={styles.secHeader}>{"\n"}{"\n"}Usuń swoje dane osobowe{"\n"}</Text>
                    Masz prawo do usunięcia lub zażądania, abyśmy pomogli w usunięciu danych osobowych, które zebraliśmy na Twój temat.
                    Nasza Usługa może dać Ci możliwość usunięcia pewnych informacji o Tobie z poziomu Usługi.
                    Możesz aktualizować, zmieniać lub usuwać swoje dane w dowolnym momencie, logując się na swoje Konto, jeśli je posiadasz, i odwiedzając sekcję ustawień konta, która umożliwia zarządzanie Twoimi danymi osobowymi. Możesz również skontaktować się z nami, aby poprosić o dostęp, poprawienie lub usunięcie wszelkich danych osobowych, które nam przekazałeś.
                    Należy jednak pamiętać, że możemy być zmuszeni do zachowania pewnych informacji, gdy mamy do tego obowiązek prawny lub podstawę prawną.
                    <Text style={styles.secHeader}>{"\n"}{"\n"}Ujawnienie Twoich danych osobowych{"\n"}</Text>
                    <Text style={styles.thirdHeader}>{"\n"}Transakcje biznesowe{"\n"}</Text>
                    Jeśli Firma jest zaangażowana w fuzję, przejęcie lub sprzedaż aktywów, Twoje Dane Osobowe mogą zostać przekazane. Prześlemy powiadomienie, zanim Twoje dane osobowe zostaną przekazane i staną się przedmiotem innej Polityki prywatności.
                    <Text style={styles.thirdHeader}>{"\n"}{"\n"}Egzekwowanie prawa{"\n"}</Text>
                    W pewnych okolicznościach Firma może być zobowiązana do ujawnienia Twoich Danych Osobowych, jeśli jest do tego zobowiązana przez prawo lub w odpowiedzi na uzasadnione żądania władz publicznych (np. sądu lub agencji rządowej).
                    <Text style={styles.thirdHeader}>{"\n"}{"\n"}Inne wymogi prawne{"\n"}</Text>
                    Firma może ujawnić Twoje Dane Osobowe w dobrej wierze, że takie działanie jest niezbędne do:{"\n"}
                    <Text style={styles.strong}> {"\n"}  • Wypełniania obowiązku prawnego </Text>
                    <Text style={styles.strong}> {"\n"}  • Ochrony i obrony praw lub własności Firmy</Text>
                    <Text style={styles.strong}> {"\n"}  • Zapobiegania lub badania możliwości wykroczenia w związku z Usługą</Text>
                    <Text style={styles.strong}> {"\n"}  • Ochrona bezpieczeństwa osobistego Użytkowników Serwisu lub społeczeństwa</Text>
                    <Text style={styles.strong}> {"\n"}  • Ochrony się przed odpowiedzialnością prawną</Text>
                    <Text style={styles.secHeader}>{"\n"}{"\n"}Bezpieczeństwo Twoich danych osobowych{"\n"}</Text>
                    Bezpieczeństwo Twoich Danych Osobowych jest dla nas ważne, ale pamiętaj, że żadna metoda przesyłania przez Internet, ani metoda elektronicznego przechowywania nie jest w 100% bezpieczna. Chociaż staramy się stosować komercyjnie akceptowalne środki w celu ochrony Twoich danych osobowych, nie możemy zagwarantować ich całkowitego bezpieczeństwa.
                    <Text style={styles.firstHeader}>{"\n"}{"\n"}Prywatność dzieci{"\n"}</Text>
                    Nasza Usługa nie jest skierowana do osób poniżej 13 roku życia. Nie zbieramy świadomie danych osobowych osób poniżej 13 roku życia. Jeśli jesteś rodzicem lub opiekunem i wiesz, że Twoje dziecko przekazało nam Dane Osobowe, prosimy Skontaktuj się z nami. Jeśli dowiemy się, że zebraliśmy Dane osobowe od osób poniżej 13 roku życia bez weryfikacji zgody rodziców, podejmiemy kroki w celu usunięcia tych informacji z naszych serwerów.
                    Jeśli musimy polegać na zgodzie jako podstawie prawnej do przetwarzania Twoich danych, a Twój kraj wymaga zgody rodzica, możemy wymagać zgody Twojego rodzica, zanim zbierzemy i wykorzystamy te informacje.
                    <Text style={styles.firstHeader}>{"\n"}{"\n"}Linki do innych stron internetowych{"\n"}</Text>
                    Nasz Serwis może zawierać linki do innych stron internetowych, które nie są przez nas obsługiwane. Jeśli klikniesz łącze strony trzeciej, zostaniesz przekierowany na stronę tej osoby trzeciej. Zdecydowanie zalecamy zapoznanie się z Polityką prywatności każdej odwiedzanej witryny.
                    Nie mamy kontroli i nie ponosimy żadnej odpowiedzialności za treść, politykę prywatności lub praktyki jakichkolwiek witryn lub usług stron trzecich.
                    <Text style={styles.firstHeader}>{"\n"}{"\n"}Zmiany w niniejszej Polityce Prywatności{"\n"}</Text>
                    Od czasu do czasu możemy aktualizować naszą Politykę prywatności. Powiadomimy Cię o wszelkich zmianach, publikując nową Politykę prywatności na tej stronie.
                    Powiadomimy Cię o tym za pośrednictwem poczty elektronicznej i/lub widocznego powiadomienia w naszej usłudze, zanim zmiana wejdzie w życie, i zaktualizujemy datę „Ostatnia aktualizacja” na górze niniejszej Polityki prywatności.
                    Zaleca się okresowe przeglądanie niniejszej Polityki prywatności pod kątem wszelkich zmian. Zmiany w niniejszej Polityce Prywatności wchodzą w życie z chwilą ich opublikowania na tej stronie.
                    <Text style={styles.firstHeader}>{"\n"}{"\n"}Zmiany w niniejszej Polityce Prywatności{"\n"}</Text>
                    Jeśli masz jakiekolwiek pytania dotyczące niniejszej Polityki prywatności, możesz skontaktować się z nami:
                    <Text style={styles.strong}> {"\n"}  • Email: </Text> szymon.gonerko@gmail.com
                </Text>
            </ScrollView>
            <CustomCheckbox onPress={onPressCheckBox} labelText={"Wyrażam zgodę na przetwarzanie moich danych osobowych"} style={{margin: 20}}/>
            <Button onPress={onPressAccept} disable={!agree} styleContainer={{height: 50, marginBottom: 10, marginLeft: 10, marginRight: 10 }}>Akceptuję</Button>
        </View>
    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles.backgroundAlfa,
        width: "100%",
        height: "100%",
    },
    box: {
        position: "absolute",
        top: "25%",
        left: "7.5%",
        width: "85%",
        height: "45%",
        backgroundColor: "white",
        borderRadius: 8
    },
    title: {
        width: "100%",
        color: "black",
        fontFamily: "NunitoBold",
        textDecorationLine: "underline",
        fontSize: 20,
        paddingBottom: 5
    },
    defaultText: {
        margin: 5,
        fontFamily: "NunitoRegular",
        color: globalStyles.accentFontColor,
        fontSize: 11,
        lineHeight: 15
    },
    firstHeader: {
        fontFamily: "NunitoBold",
        fontSize: 18,
        lineHeight: 23
    },
    secHeader: {
        fontFamily: "NunitoBold",
        fontSize: 16,
    },
    thirdHeader: {
        fontFamily: "NunitoBold",
        fontSize: 14,
    },
    strong: {
        fontFamily: "NunitoBold",
    }
})