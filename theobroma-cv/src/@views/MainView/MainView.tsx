import { Box, Container, Grid, Paper } from '@mui/material';

const MainView = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={3}
          //  style={{ padding: 3 }}
        >
          <Grid item xs={12}>
            <Box sx={{ mb: 1 }}>
              <Paper elevation={3}>
                {/* Search */}
                AppSearch
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={1}>
              <Paper elevation={3}>
                {/* CurrentWeather */}
                CurrentWeather{' '}
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={1}>
              <Paper elevation={3}>
                {/* Forecast */}
                Forecast
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={1}>
              <Paper elevation={3}>
                {/* Forecast */}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ducimus amet a
                repellendus porro obcaecati officia, doloribus accusamus soluta, quae culpa
                aspernatur recusandae consequatur similique nobis aut! Dolorum, ullam assumenda.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, explicabo quasi.
                Totam tenetur nam id sapiente soluta, perspiciatis tempore aliquam libero corrupti,
                fuga porro incidunt. Rem dolores commodi quis delectus! Optio odio cupiditate
                delectus, excepturi possimus, itaque commodi ullam reiciendis distinctio tempore
                asperiores porro consequatur quod necessitatibus perferendis dolore dignissimos
                soluta. Minus consequuntur beatae eaque deserunt enim nulla, labore consectetur?
                Sunt mollitia nostrum, aut aperiam illo fuga totam, modi beatae consequatur
                laudantium, nam autem ab nemo necessitatibus explicabo impedit eum tempore quam.
                Odio numquam dolore dolor ex, dolorem corporis nihil. Eaque dolore aliquam, itaque
                atque libero praesentium, deleniti ullam obcaecati sunt neque magnam porro saepe
                temporibus quas culpa at aperiam facilis aut eius? Porro, quia dolorem officia ipsam
                inventore dicta? Quam beatae delectus iusto tenetur est, a odit odio necessitatibus
                similique natus corrupti suscipit id incidunt ex dolores ad expedita, ut neque
                corporis sit, fugiat autem magnam quos. Dicta, quia? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolor fugit eligendi aspernatur saepe. Ab debitis
                velit fuga optio. Repellendus labore voluptatibus repudiandae, excepturi in cumque
                eaque rem enim fuga. Atque? Similique porro iure dicta laborum non? Sunt, amet.
                Soluta ea repellat consequatur cum reprehenderit unde vel, perferendis sequi
                voluptatem deserunt voluptas eaque aperiam enim explicabo incidunt dolor non error
                ut? Ipsa, nostrum modi! Temporibus cumque aliquam veritatis quisquam placeat.
                Officiis, quam in? Quasi, quod quibusdam? Iusto accusamus eveniet animi fugit?
                Quisquam similique, quod harum animi nostrum enim quia error fugit. Qui placeat at,
                eos consequatur possimus fuga culpa fugit? Architecto vitae consectetur ut
                consequuntur itaque, quos non aut hic, minus nam dolorem, fuga facere velit
                cupiditate obcaecati a pariatur explicabo. Fuga, quasi. Aliquam fugiat voluptatibus
                voluptas? Sunt, vel. Voluptatibus excepturi expedita cumque nesciunt, eligendi
                vitae, labore tempora totam deserunt perspiciatis maiores. Hic animi mollitia vel,
                veniam dolore facere architecto aperiam! Saepe ea dolore, aliquid dolorem aspernatur
                asperiores consequatur repudiandae autem ut ratione odit totam possimus, non sint.
                Adipisci quae distinctio cum sint impedit numquam qui consequatur explicabo!
                Deleniti, reprehenderit pariatur. Perferendis, nobis nostrum exercitationem totam,
                suscipit incidunt hic molestiae assumenda, explicabo porro excepturi! Iusto porro
                nostrum corrupti. Cupiditate ratione nisi, id enim nulla architecto facilis
                consectetur. Totam cupiditate voluptatem exercitationem. Consequatur nesciunt at
                voluptate illo voluptatibus harum cupiditate ad non expedita tempore eius nisi, sint
                omnis velit perferendis autem delectus beatae reprehenderit aspernatur qui suscipit
                odit animi. Vel, exercitationem velit! Iusto reiciendis autem sequi qui magnam.
                Itaque reprehenderit, omnis voluptatem vitae inventore suscipit alias, molestiae
                placeat, ab velit tenetur praesentium voluptate harum! Voluptatibus eligendi debitis
                eius nesciunt ipsam illum dolores! Dignissimos molestiae atque itaque dicta iste
                sint, nihil odio modi soluta dolorum expedita maiores inventore esse eaque
                praesentium nisi et libero porro voluptas, aspernatur ullam distinctio. Ipsum
                aliquam omnis eius.
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MainView;
