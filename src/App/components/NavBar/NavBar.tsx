import * as React from "react";
import { connect } from "react-redux";

import { autobind } from "core-decorators";

import { Trans, translate } from "react-i18next";

import { isProd } from "@/runtime-env";

import styled, { Intent, FontSize } from "@/style";

import Icon from "@/components/Icon";
import Button from "@/components/Button";

import mapDispatchToProps, { DispatchProps } from "./events";

import NavBarContainer from "./components/NavBarContainer";

import NavBarGroup from "./components/NavBarGroup";
import NavBarTitleText from "./components/NavBarTitleText";

// TODO: generic component.  Make icon clickable and able to have cursor specified?
const ClickSpan = styled.span`
  cursor: pointer;
`;

type Props = DispatchProps;
class NavBar extends React.Component<Props> {
  private _input: HTMLElement | null = null;

  render() {
    const { onLoadTestData, onSettingsClick } = this.props;
    return (
      <NavBarContainer>
        <NavBarTitleText>Duplicity</NavBarTitleText>
        <NavBarGroup>
          <input
            ref={el => (this._input = el)}
            style={{ display: "none" }}
            type="file"
            accept=".sav"
            onChange={this._onLoadFileInput}
          />
          <Button onClick={this._onLoadFileClick} verticalAlign="middle">
            <Trans i18nKey={"load-file.load"}>Load</Trans>
          </Button>
          {!isProd && (
            <Button onClick={onLoadTestData} verticalAlign="middle">
              Test
            </Button>
          )}
          <Button
            intent={Intent.Primary}
            onClick={this._onSaveFileClick}
            verticalAlign="middle"
          >
            <Trans i18nKey={"save-file.save"}>Save</Trans>
          </Button>
          <a
            title="Github"
            href="https://github.com/RoboPhred/oni-duplicity"
            target="_blank"
          >
            <Icon.Github
              intent={Intent.Hint}
              fontSize={FontSize.Heading}
              verticalAlign="middle"
            />
          </a>
          <ClickSpan title="Settings" onClick={onSettingsClick}>
            <Icon.Settings
              intent={Intent.Hint}
              fontSize={FontSize.Heading}
              verticalAlign="middle"
            />
          </ClickSpan>
        </NavBarGroup>
      </NavBarContainer>
    );
  }

  @autobind()
  private _onLoadFileClick() {
    if (!this._input) {
      return;
    }
    this._input.click();
  }

  @autobind()
  private _onLoadFileInput(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) {
      return;
    }
    const file = files[0];

    const { onLoad } = this.props;
    onLoad(file);
  }

  @autobind()
  private _onSaveFileClick() {
    const { onSave } = this.props;
    const fileName = withExtension("my-file", ".sav");
    onSave(fileName);
  }
}
export default connect(
  null,
  mapDispatchToProps
)(translate()(NavBar));

function withExtension(name: string, ext: string): string {
  if (name.endsWith(ext)) return name;
  return name + ext;
}
