import styled from 'styled-components/native'

export const Container = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #93D871;
`;

export const Logo = styled.Image`
    width: 220px;
    height: 250px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #93A144;
    color: #FFFFFF;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 50px;
    width: 100px;
    height: 56px;
`;

export const Text = styled.Text`
    color: #FFFFFF;
`;

// HOME //

export const ScrollView = styled.ScrollView`
    background-color: #93D871;
    height: 100%;
`;

export const SafeAreaViewScroll = styled.ScrollView`
    background-color: #93D871;
    width: 100%;
    height: 100%;
`;

export const SafeAreaView = styled.SafeAreaView`
    background-color: #93D871;
    width: 100%;
    height: 100%;
`;

export const HeaderContent = styled.View`
    display: flex;
    padding: 20px;
    margin-top: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderLogo = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const LogoImage = styled.Image`
    width: 54px;
    height: 44px;
`;

export const LogoText = styled.Text`
    color: #fff;
    font-size: 18px;    
`;

export const DivButton = styled.View`
    self-align: flex-end;
    display: flex;
    flex-direction: row;
`;


export const HeaderButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 30px;
    height: 30px
`;

export const HeaderLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;
export const HeaderLinkText = styled.Text`
    color: #fff;
`;

export const HeaderButtonText = styled.Text`
    font-size: 16px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    padding: 20px;
    display: flex;
    flex-direction: row;
`;

export const TextInput = styled.TextInput`
    border: 1px solid #fff;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #fff;
    color: #111;
    
    padding: 10px 10px;
    max-height: 55px;
    flex: 1;
`;

export const ContentButton = styled.TouchableOpacity`
    width: 100px;
    max-height: 55px;
    background-color: #199484;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #199484;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;    
`;

export const Main = styled.View`
    margin: 10px 25px 20px 25px;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;

    background-color: #fff;
    border-radius: 5px;
    box-shadow: -8px 8px 0px rgba(23, 149, 131, 1);
`;

export const UserIcon = styled.Image`
    width: 34px;
    height: 26px;
    position: relative;
    top: 0;
`;

export const UserName = styled.Text`
    color: #000;
    flex: 1;
`;

export const MainHeader = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
`;

export const MainButton = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 30px;
    height: 30px
    margin: 0px 5px;
`;

export const MainButtonText = styled.Text`
    //substituido  
`;


export const MainContent = styled.View`
    display: flex;
`;

export const MainContentTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 10px;
`;

export const MainContentText = styled.Text`
    font-size: 14px;
`;

// PAGE - CREATE - EDIT

export const PageTitle = styled.Text`
    font-size: 18px;
    color: #fff;
    margin-left: 20px;
    margin-bottom: 20px;
    font-weight: bold;
`;

// FORM INPUTS //

export const TextInputForm = styled.TextInput`
    border: 1px solid #179583;
    border-radius: 5px;
    padding: 10px;
    height: 40px;
    margin-bottom: 10px;
    font-weight: bold;
`;
    
export const TextAreaInputForm = styled.TextInput`
    border: 1px solid #179583;
    border-radius: 5px;
    padding: 10px;
    height: 100px;
    margin-bottom: 10px;
    font-weight: bold;
`;

export const LabelInput = styled.Text`
    margin: 10px 0px 10px;
`;

export const ButtonAlign = styled.View`
    display: flex;
    align-items: flex-end;
`;

export const ButtonForm = styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    background-color: #199484;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #199484;
    border-radius: 5px;
`;

export const ButtonFormText = styled.Text`
    font-size: 18px;
    color: #fff;
    justify-content: center;
    align-items: center;
`;

// REQUEST STATUS PAGE //

export const AlignCenter = styled.View`
    display: flex;
    align-items: center;
`;

export const ContainerText = styled.View`
    width: 60%;
    margin-bottom: 20px;   
`;

export const AlignTextCenter = styled.Text`
    font-size: 14px;
    text-align: center;
`;