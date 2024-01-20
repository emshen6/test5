import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import { FactoryImage } from '../../../assets/image/FactoryImage';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer/index.tsx';
import { Benefits } from '../../components/Benefits/index.tsx';
import { About } from '../../components/About';
import { CatalogPart } from '../../components/CatalogPart';
import { useGetProductsQuery } from '../../../core/api/product';

const cx = classNames.bind(styles);

export const Landing: React.FC = () => {
    const { data } = useGetProductsQuery();
    const titles = ['a', 'b', 'c', 'd'];
    const descriptions = ['a', 'b', 'c', 'd'];

    console.log(data);
    return (
        <div className={cx(styles.landing)}>
            <ContentWrapper>
                <div className={'container block'}></div>
                <Icon icon={ICON.LOGO} width={175} height={55} color={'black'} />
                <Header />
                <FactoryImage />
                <Benefits titles={titles} descriptions={descriptions} />
                <About />
                <CatalogPart />
                <Footer />
            </ContentWrapper>
        </div>
    );
};
