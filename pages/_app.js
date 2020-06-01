import '../assets/css/bootstrap.min.css';
import '../assets/css/animate.min.css';
import '../assets/css/icofont.min.css';
import '../assets/css/pe-icon-7-stroke.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';

import App from 'next/app';
import { DefaultSeo } from 'next-seo';
// import Loader from '../components/Shared/Loader';
import GoTop from '../components/GoTop';

export default class MyApp extends App {
    static async getInitialProps ({ Component, ctx }) {
        return {
            pageProps: Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {}
        }
    }

    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    
    render () {
        const { Component, pageProps } = this.props

        return (
            <React.Fragment>
                <DefaultSeo
                    title='KA-Therapy Cognitive Behavioural Therapy'
                    description='KA-Therapy Cognitive Behavioural Therapy services. CBT, Anxiety, Depression, OCD, Addiction, Trauma.'
                    openGraph={{
                        type: 'website',
                        locale: 'en_GB',
                        url: 'https://www.ka-therapy.co.uk',
                        site_name: 'KA-Therapy',
                    }}
                />

                <Component {...pageProps} />
                
                {/* Preloader */}
                {/* <Loader loading={this.state.loading} /> */}

                {/* Go Top Button */}
                <GoTop scrollStepInPx='50' delayInMs='10.50' />
            </React.Fragment>
        );
    }
}