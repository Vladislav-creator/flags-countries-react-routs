import { Loader } from '../components/Loader/Loader';
import { CountryInfo } from '../components/CountryInfo/CountryInfo';
import { Section, Container } from '../components/App/App.styled';
import { useFetchCountry } from 'hooks/useFetchCountry';
import { Navigate } from 'react-router-dom';
import { routes } from 'routes';

export const Country = () => {
  const {loading, error, country} = useFetchCountry();
  return (
    <Section>
      <Container>
       {loading&& <Loader/>}
       {error && <Navigate to = {routes.HOME}/>}
       {country && <CountryInfo
       country={country}/>}
      </Container>
    </Section>
  );
};