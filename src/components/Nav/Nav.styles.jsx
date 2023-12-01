import styled from "styled-components";

export const NavStyles = styled.nav`
  box-sizing: border-box;
  display: flex;
  min-width: 100%;
  max-width: 100%;
  height: 80px; 
  background: var(--blue-980);      
  border: 2px solid red;
  align-items: end; 

  :first-child {
    margin-left: 110px;     
  }

    a {
      margin-right: 22px;  
      color: #fff;
      margin-bottom: 10px;
      font-size: 20px;

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
    
    @media(max-width: 500px) { 
      font-size: 16px;
    }

    @media(max-width: 400px) {
      font-size: 14px;

    }  
  }

    @media(max-width: 700px) {
      
      :first-child { 
        margin-left: 60px;
      }

    }

@media(max-width: 500px) { 

  :first-child {  
    margin-left: 20px; 
  }

  a {
    font-size: 18px;

    &.active {
      text-decoration: 2px #fff underline;  
    }
  }
}

@media(max-width: 400px) {

  :first-child {  
    margin-left: 8px;  
  }

  a {
    font-size: 16px;
    margin-right: 12px; 
    
  }
}
` 
