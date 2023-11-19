// import { Container, CountryList, Heading, Loader, Section } from "components";
import { Loader } from '../components/Loader/Loader';
import { useFetchCountries } from "hooks";
import { CountryList } from '../components/CountryList/CountryList';
import { Section, Container, Heading } from '../components/App/App.styled';
export const Home = () => {
  const { countries, loader, error } = useFetchCountries();
  
  return (
    <Section>
      <Container>
        {loader && <Loader/>}
        {error && <Heading
        textAlign ='center'>Something went wrong</Heading>}
        {countries.length > 0 && <CountryList
        countries={countries}/>}

      </Container>
    </Section>
  );
};