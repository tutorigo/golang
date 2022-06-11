import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Açık Kaynaklı',
    Svg: require('@site/static/img/gopher_happy.svg').default,
    description: (
      <>
        Güncel ve doğruluğun sağlanabilmesi amacıyla tüm içerikler katkıda bulunulmaya açık halde yer almaktadır.
      </>
    ),
  },
  {
    title: 'Tüm Seviyelere Uygun',
    Svg: require('@site/static/img/gopher_pink.svg').default,
    description: (
      <>
        Tüm içerikler temel ya da ileri seviyeden geliştiriciler için öğrenme ve kendini geliştirme ihtiyaçlarını karşılama amacıyla geliştirilmektedir.
      </>
    ),
  },
  {
    title: 'Sürekli Güncel',
    Svg: require('@site/static/img/gopher_star.svg').default,
    description: (
      <>
        İçerikler kendini sürekli güncelleyen yazılım dünyasında bulunan Go yeniliklerinden haberdar olunabilen yapıdadır.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
