import React from 'react';
import axios from 'axios';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Subheader from 'material-ui/Subheader';


export default class Display extends React.Component {

  constructor() {
    super()

    

    this.state = {
            title:[],
            content:[],
            comments: [],
            posts: []
            // date: []
        }


  }



  componentDidMount(historyDb) {
     axios.get('/dataGet/dataGets').then((res) => {
 
        console.log(res.data.posts)
        this.setState({posts: res.data.posts})
        
    });
    }

  render() {

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 750,
    height: 650,
    overflowY: 'auto',
  },
};

// const tilesData = [
//   {
//     img: 'img/grid-list/00-52-29-429_640.jpg',
//     title: 'Breakfast',
//     author: 'jill111',
//     //featured: true,
//   },
//   {
//     img: './img/grid-list/burger-827309_640.jpg',
//     title: 'Tasty burger',
//     author: 'pashminu',
//   },
//   {
//     img: './img/grid-list/camera-813814_640.jpg',
//     title: 'Camera',
//     author: 'Danson67',
//   },
//   {
//     img: './img/grid-list/morning-819362_640.jpg',
//     title: 'Morning',
//     author: 'fancycrave1',
//     //featured: true,
//   },
//   {
//     img: './img/grid-list/hats-829509_640.jpg',
//     title: 'Hats',
//     author: 'Hans',
//   },
//   {
//     img: './img/grid-list/honey-823614_640.jpg',
//     title: 'Honey',
//     author: 'fancycravel',
//   },
//   {
//     img: './img/grid-list/vegetables-790022_640.jpg',
//     title: 'Vegetables',
//     author: 'jill111',
//   },
//   {
//     img: './img/grid-list/water-plant-821293_640.jpg',
//     title: 'Water plant',
//     author: 'BkrmadtyaKarki',
//   },
// ];

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */
    return (
      <div>

        

        <div style={styles.root}>
          <GridList
            cellHeight={180}
            style={styles.gridList}
            cols={3}
           padding={50}
          >
            <Subheader>December</Subheader>
            {this.state.posts.map((post) => (
              <GridTile
                key={post.title}
                title={post.title}
                subtitle={<span>by <b>{post.content}</b></span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src="./img/grid-list/water-plant-821293_640.jpg" />
              </GridTile>
            ))}
          </GridList>
        </div>

      </div>



    )





  }

}



