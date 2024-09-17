// styles/AppStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6611a7',
    paddingTop: 28,
    textTransform: 'capitalize',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#00FFFF',
    marginTop: '5%',
    marginBottom: 12,
    textAlign: 'center',
    // paddingStart: '5%',
  },
  containerInput: {
    flexDirection: 'row', // colcoa tudo em linha, um ao lado do outro
    width: '100%',
    height: 44,
    alignItems: 'center', // vertical
    justifyContent: 'center', // horizontal
    marginBottom: 22
  },
  input: {
    width: '75%',
    backgroundColor: '#FBFBFB',
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 16
  },
  buttonAdd: {
    width: '15%',
    height: 44,
    backgroundColor: '#00FFFF',
    marginLeft: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list:{
    flex: 1,
    backgroundColor: '#000',
    paddingStart: '4%',
    paddingEnd: '4%',
    paddingTop: '4%'
  },

  /* code componente Tarefas */

  containerTarefa:{
    backgroundColor: 'rgba(0, 255, 255, 0.2)',
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    // gap: 8,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonTarefa:{
    marginRight: 8,
  },
  textTarefa:{
    color: "#FFF",
    fontSize: 18,
    fontWeight: 'bold',
    padding: 2
  }
});
