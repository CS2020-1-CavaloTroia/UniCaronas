import React, { useState } from 'react'
import {Modal, Container, Scroll, Item, TextItem} from './styles';
import colors from '~/styles/colors';
import { View } from 'react-native';

export interface Props {
  visible: boolean;
  setVisible: Function;
  list: Array<string>;
  selectedValue: number;
  onChange: Function;
}

const SelectList: React.FC<Props> = ({visible, setVisible, list, selectedValue, onChange}) => {
  const [maxHeight, setMaxHeight] = useState(0)
  
  return(
    <Modal 
      isVisible={visible}
      onBackButtonPress={() => setVisible(!visible)}
      onBackdropPress={() => setVisible(!visible)}
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInTiming={100}
      animationOutTiming={100}
      onLayout={event => setMaxHeight(event.nativeEvent.layout.height)}>
        <Container _height={list.length*50} _maxHeight={maxHeight}>
          <Scroll>
            {list.map((value, index) => {
              return (
                <Item key={index} onPress={() => {
                  onChange(index);
                  setVisible(!visible);
                }}>
                  <TextItem>{value}</TextItem>
                </Item>
              );
            })}
          </Scroll>
        </Container>
    </Modal>
  )
}

export default SelectList