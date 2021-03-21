import React from 'react';
import {Container, Wrapper, Row, Column, Link, Title} from './styles/footer'

export default function Footer({children, ...restProps}){
 return <Container {...restProps}>{children}</Container>
}

Footer.Wrapper = function Wrapper({children,...restProps}){
 return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function Row({children, ...restProps}){
 return <Row {...restProps}>{children}</Row>
}

Footer.Column = function Column({children, ...restProps}){
 return <Column{...restProps}>{children}</Column>
}
Footer.Link = function Link({children, ...restProps}){
 return <Link{...restProps}>{children}</Link>
}
Footer.Title = function Title({children, ...restProps}){
 return <Title{...restProps}>{children}</Title>
}