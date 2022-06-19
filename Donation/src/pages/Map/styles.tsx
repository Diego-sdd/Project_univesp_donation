import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    width: '100%',
  },

  title: {
    fontSize: 20,
    marginTop: 34,
    color: '#6C6C80',
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 4,
  },

  mapContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 16,
  },

  map: {
    width: '100%',
    height: '100%',
  },

  mapMarker: {
    width: 90,
    height: 80,
  },
  mapMarkerImageHelp : {
    widt: 10
  },
  mapMarkerContainer: {
    width: 80,
    height: 150,
    backgroundColor: '#ed3b3b',
    flexDirection: 'column',
    borderRadius: 8,
    textAlign: 'center',
    overflow: 'hidden',
    alignItems: 'center',
  },

  mapMarkerImage: {
    width: 80,
    height: 45,
    resizeMode: 'cover',
  },

  mapMarkerImageHelp: {
    width: 45,
    height: 45,
    resizeMode: 'cover',
  },

  mapMarkerTitle: {
    flex: 1,
    color: '#FFF',
    textAlign: 'center',
    fontSize: 13,
  },

  itemsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 32,
  },

  item: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eee',
    height: 120,
    width: 120,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'space-between',

    textAlign: 'center',
  },

  selectedItem: {
    borderColor: '#34CB79',
    borderWidth: 2,
  },

  itemTitle: {
    textAlign: 'center',
    fontSize: 13,
  },
});
export default styles;
