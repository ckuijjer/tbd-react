import React from 'react';

import Image from './Image';

class Gallery extends React.Component {
  render() {
    const imageUrls = [
      "https://i.redditmedia.com/m96tXKPmBKsRHRs_PD1ae2shtw2WEBUfFxJDiV3re-g.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=eb81b26a51886cd21d57b7ac1fa0d1da",
      "https://i.redditmedia.com/51pITHXIigbVBcpNCIv3vfmlN0Zm9_rUPWP18rVOA7k.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=a67294693799a4a035e7ac84c0243406",
      "https://i.redditmedia.com/wCtSRDURDimE9G91lh-hra_-CZEvg0MHpDHb1ZxF5Fw.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=c38a2763dc893c64597c7db951866cfa",
      "https://i.redditmedia.com/H1RTbjrRjQWxB_o3cwV3UiTi4wtxojMevfoOIEAhT1E.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=10a19495cf2bd15cef0f1dfc18149bd1",
      "https://i.redditmedia.com/tsZjHIWhudrPnT08QRvU-QpEQr47U5zNpPBUiBxTi5M.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=3382ba469e4543c7592154ec8e57c3c0",
      "https://i.redditmedia.com/2nfPKn2FXmCEkuimwSKMRvZeECopavHiFsKdIU41E-c.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=530e1ff6581717090e00bb9e008ac23b",
      "https://i.redditmedia.com/iUHCSHm9EHITEzU3DCK2GzwH3B_NUiWltBBaX-m48Ko.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=18231ff8d865d8cda74f8e892c607a8b",
      "https://i.redditmedia.com/2nCcmtMZ1p0EwbfDVbeFcdO9RMKEaECVZcgNe2UlIek.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=fa00a19dcf943951c040c544dccc6b3e",
      "https://i.redditmedia.com/ovqXLFDOM0pYkVAIWnb5kOj2_JBaCBbeyKyTkNj-XVc.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=b1e828f5814bad45de7e0d50b8c7b60d",
      "https://i.redditmedia.com/6Pd62S27CRn1xdxiosLnS7E_wPKUVJJmUDmQXBw9z0c.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=94081da2a9a1f5ce0e2a758e02cd72a4",
      "https://i.redditmedia.com/-8rXKkzPoI-FCwEtHKtiSqABtFRxlEMSMXCayaniVrc.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=8566db11e414ba20714b5f9d32a7ec85",
      "https://i.redditmedia.com/k2-HBLDtrQnYAOfU4U8zGHgQ-WgcWfPsLKLsZ0c4MfI.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=d1d7f9bd141679e5d9063e496ca0d3be",
      "https://i.redditmedia.com/HVmG1kjMhcro4wgf9azT0UPh0ebM8BsvIw3X7CwCITA.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=e7c0433f19243fd45be6d499418baed7",
      "https://i.redditmedia.com/nvjeGltLrSM8aw67sbstiJfTJcuiIoKET5vEUeLaguc.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=09522438a55322beff22c045edeb44b8",
      "https://i.redditmedia.com/wch5tGuK4UYYWujRQYEF2nlCGM0shmU3Ht-Kuud-j7k.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=13618263a8cf5fb55858434edb21a9f4",
      "https://i.redditmedia.com/TbJsUHwww68dnjKPf-yvEtvS0pxUOKrPxH3DvV1_XZA.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=d7154693d89305c241d55e6715388963",
      "https://i.redditmedia.com/GQzb80qDKFe0qnAwhbYmMPv9PLeaErguJtcdSCvBACk.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=6f9de0fd227a26e8557c9350f567a7f5",
      "https://i.redditmedia.com/vfTXbGLqkPlvDRuXNdcDwOvcWVl6QgWIhakaIg_r03o.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=a4b33361ecef9d3ea6a6cc1c5ba8851a",
      "https://i.redditmedia.com/hE2sSVzUqLcy1_YRh36V7JHlMWzQ908A4TJ60W-lAs4.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=0a3b7f8b2fd1d654a615aa61f36d7b8f",
      "https://i.redditmedia.com/NMs9VSvrrX9KaDalXdeDXnDKKI2jF7h-z2EE7Nvvbio.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=95d612c7576646a02fdbe12fd9e1c835",
      "https://i.redditmedia.com/ldgIWZktc3jRPbAkFO3s7nmxrCpX0fpXgwHmGKOkrEo.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=3658cc41ce8b3b873630fbf14a6f6f58",
      "https://i.redditmedia.com/rXSza3twAdjra_4lVd6slPdn1Ugm38iePvngDivip6g.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=f5e40a0f66599896a889399eba7e5672",
      "https://i.redditmedia.com/hWxWCmfhUa1lzibK9uHwYRiYfsRZphlpyJ_vRGAwPx8.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=2fefa82e1371327085184cc9c9852acd",
      "https://i.redditmedia.com/DxxvhmXkRx8P6rz89IiBpWKpFJ9bWfLsprzrDMtS1Vs.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=3483c0fac33b7c56d067cf599e2ab13f",
      "https://i.redditmedia.com/mUNIm0htxqrJdn4Z6HMo4ajoMKh99zgIzXfPA3dFY_s.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=7c6f7dcc5029d67d7c35127fcdf98aa5"
    ];

    const styles = {
      container: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: 16,
      },
    };

    const onClick = this.props.onClick || (() => {});

    return (
      <div style={styles.container}>
        { imageUrls.map((imageUrl, i) => {
          return <Image src={imageUrl} onClick={() => onClick(imageUrl)} key={i} />
        }) }
      </div>
    );
  }
};


export default Gallery;