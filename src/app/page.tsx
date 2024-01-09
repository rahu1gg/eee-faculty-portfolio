import Footer from '@/components/global/footer';
import Header from '@/components/global/header';
import { Fragment } from 'react';

export default function Home() {
    return (
        <Fragment>
            <Header />
            <div>
                <p>Home</p>
            </div>
            <Footer />
        </Fragment>
    );
}
