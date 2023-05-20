// import { HondaLogo, LexusLogo, MazdaLogo, MercedesLogo, NissanLogo, ToyotaLogo } from '../../../asset/img/clients'

import { HondaLogo, LexusLogo, MazdaLogo, MercedesLogo, NissanLogo, ToyotaLogo } from "../../../asset/img/clients"


const Brand = () => {

    const brands = [
        {
            imageSrc: HondaLogo,
            alt: 'Honda Logo'
        },
        {
            imageSrc: ToyotaLogo,
            alt: 'Toyota Logo'
        },
        {
            imageSrc: LexusLogo,
            alt: 'Lexus Logo'
        },
        {
            imageSrc: MazdaLogo,
            alt: 'Mazda Logo'
        },
        {
            imageSrc: MercedesLogo,
            alt: 'Mercedes Logo'
        },
        {
            imageSrc: NissanLogo,
            alt: 'Nissan Logo'
        }
    ]
    return (
        <section className="clients section-bg">
            <div className="container">
                <div className="row">
                    {
                        brands.map((brand) => (
                            <div key={brand.alt} className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src={brand.imageSrc} className="img-fluid" alt={brand.alt} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Brand