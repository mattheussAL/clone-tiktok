import styled from 'styled-components';

export const HeaderContainer = styled.div`
 width: 100vw;
 padding: 4.2rem;

 display: flex;
 flex: 1 1 auto;
 align-items: center;
 justify-content: flex-start;

`;

export const SidebarContainer = styled.div`
 flex: 0 0 15.2rem;

 @media (max-width: 768px) {
  display: none;
  flex: 0;
 }
`;

export const ContentContainer = styled.div`
 max-width: 1194px;
 margin: 0 auto;
 padding: 2.8rem 1.2rem;

 display: flex;
 flex: 1;
`;

