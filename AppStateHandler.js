export default class AppStateHandler {

  appState: AppState = 'signed-out';

  constructor(props: Props) {
    this.props = props;
    //
    // Find out first-use
    // DefaultPreference.get(PREFERENCES.FIRST_USE.key).then((value: string) => {
    //   if (value !== PREFERENCES.FIRST_USE.values.off) {
    //     this.appState = 'first-use';
    //   }
    //   this.startApp(this.appState);
    // });

    console.log(this.props)
    this.currentValue = this.appState;
    this.startApp(this.appState);
    this.props.store.subscribe(this._onStoreUpdate);
  }

  _onStoreUpdate = () => {
    // const storeState = this.props.store.getState();
    // // const currentState = _determineAppState(storeState);

    // if (currentState !== this.appState) {
    //   this.startApp(currentState);
    //   this.appState = currentState;
    // }
    // if (Notifications.hasNotifications(storeState)) {
    //   this.props.showNotifications(storeState.notifications.notifications);
    // }

    // const storeState = this.props.store.getState();

    console.log('on store update: ', this.props.store.getState())

    const storeState = this.props.store.getState().authReducer.loggedIn;

    if (storeState !== this.appState) {
      console.log('start app');
      console.log(storeState);
      console.log(this.appState);

      this.startApp(this.props.store.getState().authReducer.loggedIn);
    }

    this.appState = this.props.store.getState().authReducer.loggedIn;
  };


  startApp = (appState: AppState) => {
    switch (appState) {
      case 'signed-out':
        this.props.onSignedOut();
        break;
      case 'signed-in-ready':
        this.props.onSingedIn();
        break;
    }
  };
}
