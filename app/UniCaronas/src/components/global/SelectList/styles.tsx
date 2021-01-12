import styled from 'styled-components/native'
import ModalComponent from 'react-native-modal';
import colors from '../../styles/colors';

export const Modal = styled(ModalComponent).attrs({
  backdropColor: '#00000077'
})`
  margin: 30px;
  align-items: center;
  height: 20px;
`

export const Container = styled.View`
  height: ${props => props._height}px;
  max-height: ${props => props._maxHeight}px;
  width: 100%;
  align-items: center;
`

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: { 
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false
})`
  width: 100%;
  max-width: 230px;
  height: 30px;
  background-color: ${colors.white}
`

export const Item = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${colors.white};
  align-items: center;
  justify-content: center;
`

export const TextItem = styled.Text`
  font-size: 20px
`