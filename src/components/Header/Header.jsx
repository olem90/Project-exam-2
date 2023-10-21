import styled from "styled-components";
import { Nav } from "../Nav/Nav";
import { HeaderStyles } from "./Header.styles";



export const Header = ()=> {
    return (
        <HeaderStyles>
            <img src="https://images.unsplash.com/photo-1565402170291-8491f14678db?auto=format&fit=crop&q=80&w=2017&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            <Nav />
        </HeaderStyles>
    )
}