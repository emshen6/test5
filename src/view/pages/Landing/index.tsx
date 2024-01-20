import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import { FactoryImage } from '../../../assets/image/FactoryImage';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer/index.tsx';
import { Benefits } from '../../components/Benefits/index.tsx';
import { Footer } from '../../components/Footer';
import { About } from '../../components/About';
import { CatalogPart } from '../../components/CatalogPart';
import { useGetProductsQuery } from '../../../core/api/product';

const cx = classNames.bind(styles);

export const Landing: React.FC = () => {
    const titles = ['a', 'b', 'c', 'd'];
    const descriptions = ['a', 'b', 'c', 'd'];

    console.log(data);

    return (
        <div className={cx(styles.landing)}>
            <div className={styles.wrapper}>
                <div>
                    <Header />
                    <FactoryImage />
                </div>
                <Benefits />
                <About />
                <CatalogPart />
                <Footer />
            </div>
        </div>
    );
};
