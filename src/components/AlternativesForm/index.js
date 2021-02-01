import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.primary};
      
      &[data-status="1"] {
        background-color: ${({ theme }) => theme.colors.horrible};
      }
      &[data-status="2"] {
        background-color: ${({ theme }) => theme.colors.bad};
      }
      &[data-status="3"] {
        background-color: ${({ theme }) => theme.colors.regular};
      }
      &[data-status="4"] {
        background-color: ${({ theme }) => theme.colors.good};
      }
      &[data-status="5"] {
        background-color: ${({ theme }) => theme.colors.excelent};
      }
    }
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;