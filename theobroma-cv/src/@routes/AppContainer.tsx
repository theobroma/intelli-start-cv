import MainView from '@views/MainView/MainView';
import AppLayout from './AppLayout';

function AppContainer() {
  return (
    <div className="App">
      <AppLayout>
        <MainView />
      </AppLayout>
    </div>
  );
}

export default AppContainer;
