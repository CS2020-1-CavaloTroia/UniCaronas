import React, { useState } from "react";
import Icon from "../Icon";
import colors from "../../../styles/colors";
import SelectList from "../SelectList";
import {
  Container,
  Title,
  IContainer,
  TInput,
  TextBottom,
  SelectContainer,
  SelectText,
} from "./styles";

export default function Input({
  title,
  titleColor = colors.black,
  background = colors.white,
  textColor = colors.black,
  borderColor = colors.danger,
  textBottom = null,
  textBottomColor = colors.danger,
  select = [],
  ...rest
}) {
  const [selecedIndex, setSelectedIndex] = useState(0);
  const [showList, setShowList] = useState(false);

  return (
    <Container>
      <Title color={titleColor}>{title}</Title>
      <IContainer
        background={background}
        border={textBottom ? borderColor : null}
        select={select.length > 0}
      >
        <TInput color={textColor} select={select.length > 0} {...rest} />
        {select.length > 0 && (
          <>
            <SelectContainer onPress={() => setShowList(!showList)}>
              <SelectText color={textColor}>{select[selecedIndex]}</SelectText>
              <Icon
                type="Ionicons"
                name="chevron-down"
                size={20}
                color={colors.white}
              />
            </SelectContainer>

            <SelectList
              visible={showList}
              setVisible={setShowList}
              list={select}
              selectedValue={selecedIndex}
              onChange={setSelectedIndex}
            />
          </>
        )}
      </IContainer>
      {textBottom && (
        <TextBottom color={textBottomColor}>{textBottom}</TextBottom>
      )}
    </Container>
  );
}
