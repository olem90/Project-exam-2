import styled from "styled-components";

export const NavStyles = styled.nav`
  box-sizing: border-box;
  display: flex;
  min-width: 100%;
  max-width: 100%;
  height: 80px; 
  background: #362815;  
  align-items: end; 

    .page-name {
      margin-left: 50px; 
      font-family: 'Great Vibes', cursive;     
      color: #b7963c;      
      font-size: 42px;    
      margin-top: auto;  
      height: 55px; 

      @media(max-width: 700px) { 
        margin-left: 10px;   
        color: #fff;   
      }
    }

    :nth-child(2) { 
      margin-left: 80px;
    }

    a {
      margin-right: 22px;
      color: #fff;
      margin-bottom: 10px;
      font-size: 20px;

      &:hover {
        color: #b7963c; 
      }

      &.active {
        text-decoration: underline; 
      }
    }

    .login-link {
      margin-left: auto; 
      background: var(--blue-980);
      display: flex;
      justify-content: center; 
      align-items: center; 
      color: #fff; 
      border: 2px solid #fff;
      padding: 5px;
      height: 20px;
      font-weight: 500;    
      font-size: 18px;   
      border-radius: 8px;   
      margin:  auto 10px 10px auto; 
      white-space: nowrap; 

      @media(max-width: 600px) {  
        display: none; 
      }
    
      @media(max-width: 500px) { 
        font-size: 16px;
      }

      @media(max-width: 400px) {
        font-size: 14px;
      }  
    }

    @media(max-width: 700px) {
      
      :nth-child(2) { 
        margin-left: 50px;   
      }

    }

@media(max-width: 600px) { 

  :nth-child(2) { 
    margin-left: 0;   
  } 

  .nav-link, login-link { 
    display: none;  
  }

  a {
    font-size: 18px;
  }
} 

@media(max-width: 500px) {    

 
}
` 
