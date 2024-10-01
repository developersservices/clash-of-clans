import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Button from '../components/button/Button';

const Home = () => {
  return (
        <><View style={styles.container}>
              <View style={styles.main}>
                  <Text style={styles.heading}>
                      New Clans to Join
                  </Text>
                  <Text style={styles.param}>
                      Looking to connect with like-minded players and dive into thrilling challenges? Explore a wide variety of new clans and become part of a dynamic community where teamwork, strategy, and fun come together. Whether you're a seasoned veteran or just starting out, there's a clan for everyone. Click here to browse through the latest clans, find the perfect fit, and start your next adventure today!
                  </Text>
              </View>
              <View style={styles.main}>
                  <Text style={styles.heading}>
                      Check the SupperCell News
                  </Text>
                  <Text style={styles.param}>
                      Stay up to date with everything happening in the world of SuperCell with our latest news updates! From game-changing features and new releases to insider tips, strategies, and exciting developments, SuperCell News is your go-to source for all things related to the SuperCell universe. Whether you’re a fan of Clash of Clans, Brawl Stars, or any of their other hit games, we’ve got you covered with real-time updates, exclusive interviews, and behind-the-scenes stories. Don't miss out on breaking news, major announcements, and sneak peeks of upcoming content that will keep you in the loop and ahead of the game. Dive into SuperCell’s latest updates now and stay connected to the action!
                  </Text>
              </View>
      </View>
      <View style={styles.align}>
              <View style={styles.tent}>
                  <TouchableOpacity>
                    <Button
                    btn="Instagram"
                    onPress={() => Linking.openURL('https://www.instagram.com/taha._.al3/')}
                    />
                  </TouchableOpacity>
              </View>
              <View style={styles.content}>
                <Text style={styles.contHeading}>Join the Clash of Clans Community: Unit, Compete, and Conquer!</Text>
                <Text style={styles.contParam}>At Clash of Clans, we believe that the heart of every great battle lies in teamwork and camaraderie. Our main purpose is to foster a thriving community where players can connect, strategize, and embark on epic adventures together.</Text>
                <Text style={styles.contParam}>Whether you’re a seasoned warrior or just starting your journey, we welcome you to join our diverse clans, each with its unique strengths and personalities. Here, you’ll find a place where you can share your victories, learn from experienced players, and develop strategies that will help you dominate the battlefield.</Text>
              </View>
                  <View style={styles.content}>
                  <Text style={styles.contHeading}>Why Join a Clan?</Text>
                <Text style={styles.contParam}>Collaborative Gameplay: Team up with fellow clan members to tackle challenges and achieve common goals. Share resources, troop strategies, and valuable insights to help everyone level up faster.</Text>
                <Text style={styles.contParam}>Thrilling Clan Wars: Engage in exciting clan wars where you can showcase your skills, gain valuable rewards, and earn bragging rights. Nothing beats the adrenaline rush of battling alongside your clanmates!</Text>
                <Text style={styles.contParam}>Community Spirit: Become part of a close-knit community that celebrates each other’s successes and supports one another through the ups and downs of gameplay. Forge friendships that extend beyond the game and share in the joys of victory together.</Text>
                <Text style={styles.contParam}>Exclusive Events and Rewards: Participate in clan-exclusive events, tournaments, and activities that offer unique rewards and recognition. Enhance your gameplay experience and keep things fresh with new challenges.</Text>
                <Text style={styles.contHeading}>Our Mission</Text>
                <Text style={styles.contParam}>Our mission is simple: to create a welcoming and engaging environment for players of all skill levels. We aim to promote teamwork, strategic thinking, and enjoyment in every clash. Together, we can build formidable clans that rise to the top of the leaderboard and leave a lasting legacy in the world of Clash of Clans.</Text>
                <Text style={styles.contParam}>Join us today and experience the thrill of being part of a clan that values cooperation, strategy, and fun. Unleash your potential, make new friends, and embark on an unforgettable journey in Clash of Clans!</Text>
              </View>
          </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
    container:{
        height: 'auto',
        width: '100%',
        backgroundColor: '#3f3e3e',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    main:{
        height: 'auto',
        width: 340,
        backgroundColor: 'transparent',
        marginHorizontal: 10,
        marginTop: 20,
        marginBottom: 10,
        padding: 1,
        borderRadius: 10,
    },
    heading: {
        fontSize: 25,
        fontWeight: '600',
        color: '#fff',
    },
    param:{
        marginTop: 10,
        color: '#fff',
        fontSize: 17,
    },
    align:{
        height: 'auto',
        marginTop: 1,
        padding: 10,
        backgroundColor: '#000',
    },
    content:{
        marginTop: 15,
        padding: 10,
    },
    contHeading:{
        fontSize: 18,
        fontWeight: '600',
        color: '#ff1',
    },
    contParam:{
        marginTop: 5,
        marginHorizontal: 10,
    },
});
