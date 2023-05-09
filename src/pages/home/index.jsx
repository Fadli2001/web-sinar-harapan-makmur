import React, { Component } from 'react'
import Hero from './Hero'
import Brand from './Brand'
import About from './About'
import CreditInform from './CreditInform'
import TopCarProduct from './TopCarProduct'
import Contact from './Contact'
import Footer from '../../components/footer'

export default class Home extends Component {
    render() {
        return (
            <>
                <Hero />
                <main id={"main"}>
                <Brand/>
                <About/>
                <CreditInform/>
                <TopCarProduct/>
                <Contact/>
                </main>
                <Footer/>
            </>
        )
    }
}
