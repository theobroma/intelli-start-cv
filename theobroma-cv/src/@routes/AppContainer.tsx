import Footer from '@components/Footer';
import Header from '@components/Header';
import MainView from '@views/MainView/MainView';

function AppContainer() {
  return (
    <div className="App">
      {/* AppLayout */}
      <Header />
      <MainView />
      <Footer />
      {/* AppLayout */}
    </div>
  );
}

export default AppContainer;
