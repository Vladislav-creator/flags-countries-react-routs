import { Grid, GridItem, Subtitle } from "../App/App.styled";
import { Link } from "react-router-dom";
import { routes } from "routes";

export const CountryList = ({ countries }) => {
  return ( <Grid>
    {countries.map(({ id, country, flag }) => (
      <GridItem key={id}>
       <Link to ={`${routes.COUNTRY}/${id}`}><img src={flag} width='150' height='100' alt={country} /></Link> 
       <Subtitle>{country}</Subtitle>
      </GridItem>
    ))}
  </Grid>)
};