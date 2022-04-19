# Night club Svendeprøveprojekt

## Webudvikler 2022 - Roskilde Tekniske Skole

_by Pauline Holm, WU05_

PS. Den valgfrie opgave er Opgave A: Bloggen

### Valg af teknologier

- [Jamstack](https://jamstack.org/) er en teknologistack jeg lært at bruge igennem skoleforløbet. JamStack står for: JavaScript, API og Markup. Den lader os at lave vores hjemmesider/apps bedre og mere bæredygtige. En af dens største fordel er, blandt andet, sikkerhed og hurtigere side loading. Den kræver ikke en server til hosting.

- [React](https://reactjs.org) er et meget kendt og brugt verden rundt, JavaScript bibliotek, som bruges til at udvikle user interfaces (UI) uden "smerte". Det er også grunden til at jeg har valgt den til mit projekt. Dens fordele er mange, men de vigtigste jeg har oplevet er:

* fleksibilitet - projekter kan bygges med anvendelse af udelukkende React, men man kan lige så godt "mixe&matche" alle mulige teknologier og bygge sin egen stack, ligesom det passer en. Og muligheder er mange! 🤩

* bæredygtighed - React er hurtig, nem at bruge (når man engang kender syntax'en godt nok), let at debbuge (React er en meget "kommunikativ" teknologi og kan godt lide at brokke sig over enkelte, små fejl). Teknologien giver os mulighed for genbrug af vores komponenter ved brug af props. 🌿

* verden rundt kendt og brugt - er, efter min mening, den største fordel React har. For det første sikre det os masse af support muligheder, især når vi løber inde i store problemer med vores kode. For det andet, jo flere brugere det er til at "shape" teknologien, ved eksempelvis nye og nye npm pakker og frameworks. 💪

## Tredjepartskode

Liste (se nederst for beskrivelse og begrundelse):

- [React Router v6](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [Styled Components](https://styled-components.com) 💅🏾
- [Axios](https://axios-http.com/docs/intro)
- [Framer Motion](https://www.framer.com/docs/)
- [React Hook Form](https://react-hook-form.com)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)
- [React Masonry CSS](https://github.com/paulcollett/react-masonry-css)
- [React Toastify](https://github.com/fkhadra/react-toastify#readme)
- [Swiper.js](https://swiperjs.com)

* **React Router v6** er "declarative routing" for React. Router bruges til at matche URL til Routes. Det gør, at projektet er meget mere overskueligt og funktionelt. I mit projekt, drager jeg fordel af dens _Links_, så at man kan navigere smooth rundt i appen, og dens _NavLinks_ som giver mulighed for "active styling", uden at man skal skrive en hel masse kode.
* **Styled Components** 💅🏾 er bare en basic CSS-in-JS styling framework, som lader udviklere style sine komponenter i React. Jeg har valgt den fordi jeg synes at jo simplere jo bedre.
* **Axios** er en promised baseret HTTP client, som jeg er vænnet til at bruge når jeg arbejder med afhentning af data. Den har til fordel, at den er meget mere sikker end den traditionelle fetch og efter min mening er den nemmere til at bruge.
* **Framer Motion** er et animation bibliotek med en fantastisk og detaljeret documentation. Jeg har valgt at bruge den af den grund, og også fordi den er meget kendt og varmt anbefalet. Den bruges i <Section2/>, <Section3 /> & <Section6 />.
* **React Hook Form** er et ret advanceret formular bibliotek som jeg har valgt at bruge grundet dens hastighed/performance, UX-orienteret approach og de mange nemme valideringsmuligheder.
* **React Icons** er et ikon bibliotek som er meget nem at bruge, er design-orienteret og giver varierede valgmuligheder. Jeg har valgt den fordi jeg kender den og bruger den i forvejen, og så heldigvis har de også _Font Awesome_ ikoner i kataloget.
* **React Intersection Observer** er en pakke jeg har fundet brugbar fordi den indeholder _useInView_ hook som jeg gør gavn af i <Section3 />. Hooken holder øje om componentet er i "viewporten" og holder styr på hvornår skal den renderes.
* **React Masonry CSS** er en component for CSS layouts som jeg fik gavn af i <Section3 />. Den lad mig bygge en "good-looking" gallery uden smerte.
* **React Toastify** er en pakke der lader udviklere kommunikere med brugere i smertefrit og meget UX-venlig og design-orienteret måde. Jeg bruger den ved form validering, men bare in case validering er langsomt.
* **Swiper.js** er et slider bibliotek som jeg har fundet mest overskueligt ude af alle tilgængelige på "marked". Den er ikke perfekt men "does the job". Jeg gøre brug af den rigtig meget på _Forsiden_. Den fungerer optimalt og ser fornuftigt ud synes jeg.

## Produktet i detaljer

- **Hoved-navigation** <br/>
  Findes øverst på alle sider (dog under Hero på Frontsiden), indeholder relevante NavLinks (Home, Blog, Book table, Contact Us). Aktive links vises i magenta farve, med en streg over. Logoen ledes til forsiden, som er en kendt psykologisk taktik.
- **Footer** <br/>
  Findes nederst på alle sider, indeholder to sektioner. Den første giver overblik over detaljer, samt Recent posts. Den anden indeholder SoMe ikoner og copyright.
- **Forside**
- _Hero_ er på toppen af forsiden, har to baggrundsbilleder der skifter tilfædligt onPageLoad. Udover for det indeholder componentet en animation - logoen kommer først og så folder teksten efterfølgende ud.
- _Sektion 1_ præsenterer tilbud CPH NightClub har. Billeder ligger i flex og så animeres de onMouseEnter.
- _Sektion 2_ præsenterer kommende events på et slideshow, hver event animeres onMouseEnter og ved brug af den tidligere nævnte **Framer Motion**, og mens event animeres, sættes slideshowet på pause.
- _Sektion 3_ er et galleri som viser fotos fra klubben. Galleriet flyver ind fra venstre on kun når den er inView (ved hjælp af den tidligere nævnt **React Intersection Observer**). Der er en overlay animation på hver enkelt billede.
- _Sektion 6_ præsenterer et slideshow med testimonials fra klubbens gæster - indeholder billeder, navn, text og SoMe ikoner.
- _Sektion 7_ (ekstra opgave) præsenterer seneste blog-indlæg med detaljer såsom billed, author og de første tre linjer. Ved klik bliver man ført til den relevante blog-indlægget side.
- _Sektion 8_ er et simpelt "subscribe newsletter" form, der indeholder validering og giver en response til en bruger.
- **Blog Arkiv** (lavet som ekstra ekstra) indeholder også recent blog posts, "Read more" føres til den relevante blog-indlægget side.
- **Booking** & **Error** (lavet som sikkerhedsvæggene/UX-fokus) er lavet kun for brugeroplevelsesskyld. _Booking_ siden viser at CPH NightClub er i gang med at udvikle deres booking system som ville gavne deres gæster. _Error_ siden vises kun hvis man bliver "lost" på siden og henviser til "frontpage".
- **Blog Post** (ekstra opgave) præsenterer et enkelt blog-indlæg. Siden indeholder billed, titel, selve artiklen og så antal af kommentar, samt muligheden for at læse kommentarer og kommentere.
- **Kontaktside** indeholder en formular hvor klubbens gæster kan sende beskeder til klubben. Siden giver overblik over kontaktoplysninger af CPH NightClub.

## Kodestykker jeg er stolt af! 💖👌🏼

- [SomeIcons.js](/nightclub/src/components/common/SomeIcons.js)

Det er et meget bæredygtigt og fleksibelt komponent, der bliver genbrugt forskellige steder.

```javascript
    <Link to={linkFb}>
        <FaFacebookF />
      </Link>
      <Link to={linkTwitter}>
        <FaTwitter />
      </Link>
      <Link to={linkGoogle}>
        <FaGooglePlusG />
      </Link>
      {extended ? (
        <>
          <Link to="#">
            <FaSkype />
          </Link>
          <Link to="#">
            <FaBimobject />
          </Link>
        </>
      ) : null}
```

- [Section8.js](/nightclub/src/components/homeview/section8/Section8.js) &samme løsning - [Contact.js](/nightclub/src/components/contactview/ContactForm.js)

En meget smart og komplekst måde at behandle en submit og give brugeren en fornuftigt feedback.
Hvis det lykkes, opdateres staten, og så forskellige elementer renderes.

```javascript
const onSubmit = (data) => {
  axios.post("http://localhost:4000/newsletters", data).then((response) => {
    toast("Subscribing you", { autoClose: 800, position: "bottom-center" });
    if (response.status === 201) {
      setSubscribe(true);
    }
  });
};
```

### Andre overvejelser

Der var nogle komponenter og tingene som kunne have blevet løst/bygget på en anden måde, men jeg forsøgte at gøre processen så overskueligt som muligt, uden at fokusere på unødvendige debatter med mig selv omkring _this_ vs _this_ = _næsten det samme_

## Arbejdsprocessen

Jeg synes hele processesen var meget behageligt og projektet gavnede af at jeg er meget struktueret. Derfor selve planlægningen af arbejdsgangen foregik helt gammeldags på papir. Først og fremmest fokuserede jeg på at opbygge en "base" - dvs. GlobalStyles (inkl. opsætning af fonts), Routes og fil- og mappestrukturen, samt at installere de mest basale og nødvendige npm pakker. Bagefter fokuserede jeg meget på fælles komponenter - eksempelvis Header og Footer, og så kørte det efter opgavens rækkefølge bagefter. Naturligvis blev de obligatoriske dele af opgaven prioriteret først, og så gik jeg i gang med valgfrie opgave og så med ekstra ting som jeg syntes var "nice to have". Og fordi jeg interesserer mig lidt for UX på det sidste, har jeg valgt at prøve på nogle løsninger i opgaven som jeg synes giver en fornuftig brugeroplevelse.
