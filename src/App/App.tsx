import * as React from "react";
import { connect } from "react-redux";

import mapStateToProps, { StateProps } from "@/App/derived-state";
import mapDispatchToProps, { DispatchProps } from "@/App/events";

import NoSave from "@/pages/NoSave";
import ErrorPage from "@/pages/Error";
import Loading from "@/pages/Loading";
import SaveEditor from "@/pages/SaveEditor";

import SettingsModal from "@/pages/modals/SettingsModal/SettingsModal";

import AppContainer from "@/App/components/AppContainer";
import AppContent from "@/App/components/AppContent";
import NavBarContainer from "@/App/components/NavBar";

type Props = StateProps & DispatchProps;
class App extends React.Component<Props> {
  render() {
    const { error, loadingState, onDismissError } = this.props;

    let element: JSX.Element;

    if (error) {
      element = <ErrorPage error={error} onDismiss={onDismissError} />;
    } else {
      switch (loadingState) {
        case "idle":
          element = <NoSave />;
          break;
        case "loading":
        case "saving":
          element = <Loading />;
          break;
        case "ready":
          element = <SaveEditor />;
          break;
        default:
          element = <div>???</div>;
          break;
      }
    }

    return (
      <AppContainer>
        <NavBarContainer />
        <AppContent>{element}</AppContent>
        <SettingsModal />
      </AppContainer>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
