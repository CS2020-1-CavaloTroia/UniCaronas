import React from 'react';
import Icon from '~/components/global/Icon';
import IconComponent from '~/components/global/Icon'
import colors from '~/styles/colors';
import Loading from '~/components/global/Loading';
import {Container, TextButton} from './styles'

type Type = 'AntDesign' |
'Entypo'|
'EvilIcons'|
'Feather'|
'FontAwesome'|
'FontAwesome5'|
'FontAwesome5Pro'|
'Fontisto'|
'Foundation'|
'Ionicons'|
'MaterialCommunityIcons'|
'MaterialIcons'|
'Octicons'|
'RNIMigration';

export interface Props {
  text: string;
  size: number;
  loading: boolean;
  color: string;
  background: string;
  iconType: Type;
  iconName: string;
  iconColor: string;
  rest: any;
}

const Button: React.FC<Props> = ({text, size = 200, loading = true, color = colors.primaryColor, background = colors.secondaryColor, iconType = null, iconName = null, iconColor=colors.primaryColor, ...rest}) => {
  return( 
    <Container size={size} background={background} {...rest}>
      <TextButton color={color}>{text}</TextButton>

      {!loading && <Icon
        type={iconType}
        name={iconName}
        color={iconColor}
        size={30}
      />}
      
      {loading && <Loading size={25} color={colors.primaryColor}/>}
    </Container>
  )
}

export default Button;