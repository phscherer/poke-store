import gql from 'graphql-tag';

export const GET_POKEMON = gql`
  query getPokemon($name: String!) {
    pokemon(name: $name) {
      id
      number
      name
      classification
      types
      image
      resistant
      weaknesses
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      attacks {
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        number
        name
        image
        weight {
          minimum
          maximum
        }
        attacks {
          fast {
            name
            type
            damage
          }
        }
      }
    }
  }
`;

export const GET_POKEMONS = gql`
  query getPokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      classification
      image
      types
      resistant
      weaknesses
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      attacks {
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        number
        name
        image
        weight {
          minimum
          maximum
        }
        attacks {
          fast {
            name
            type
            damage
          }
        }
      }
    }
  }
`;
