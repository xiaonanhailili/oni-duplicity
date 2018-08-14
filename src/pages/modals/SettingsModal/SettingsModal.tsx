import * as React from "react";
import { connect } from "react-redux";

import mapStateToProps, {
  StateProps
} from "@/pages/modals/SettingsModal/derived-state";
import mapDisptachToProps, {
  DispatchProps
} from "@/pages/modals/SettingsModal/events";

import Modal from "@/components/Modal";
import FormGroup from "@/components/FormGroup";
import SelectInput from "@/components/SelectInput";

type Props = StateProps & DispatchProps;
class SettingsModal extends React.Component<Props> {
  render() {
    const {
      isSettingsOpen,
      language,
      onLanguageChanged,
      onCloseSettings
    } = this.props;
    const langOptions = [
      {
        label: "English",
        value: "en"
      },
      {
        label: "Chinese",
        value: "zh"
      }
    ];
    return (
      <Modal
        isOpen={isSettingsOpen}
        contentLabel="Settings"
        onRequestClose={onCloseSettings}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <FormGroup inline label="Language">
          <SelectInput
            options={langOptions}
            value={language}
            onCommit={onLanguageChanged}
          />
        </FormGroup>
      </Modal>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDisptachToProps
)(SettingsModal);
