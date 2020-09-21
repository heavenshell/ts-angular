// tslint:disable
export const launch = {
  details:
    "SpaceX will launch the second demonstration mission of its Crew Dragon vehicle as part of NASA's Commercial Crew Transportation Capability Program (CCtCap), carryingNASA astronauts Doug Hurley and Bob Behnken to the International Space Station. This mission will be the first crewed flight to launch from the United States since the end of the Space Shuttle program in 2011. DM-2 demonstrates the Falcon 9 and Crew Dragon's ability to safely transport crew to and from the space station. The booster for this mission will land on OCISLY. The mission will be complete with the safe return the Dragon capsule and astronauts.",
  id: '94',
  is_tentative: false,
  launch_date_local: '2020-05-30T15:22:00-04:00',
  launch_date_unix: 1590866520,
  launch_date_utc: '2020-05-30T19:22:00.000Z',
  launch_site: {
    site_id: 'ksc_lc_39a',
    site_name_long: 'Kennedy Space Center Historic Launch Complex 39A',
    site_name: 'KSC LC 39A',
  },
  launch_success: true,
  launch_year: '2020',
  links: {
    article_link:
      'https://spaceflightnow.com/2020/05/30/nasa-astronauts-launch-from-us-soil-for-first-time-in-nine-years/',
    flickr_images: [
      'https://live.staticflickr.com/65535/49927519643_b43c6d4c44_o.jpg',
      'https://live.staticflickr.com/65535/49927519588_8a39a3994f_o.jpg',
      'https://live.staticflickr.com/65535/49928343022_6fb33cbd9c_o.jpg',
      'https://live.staticflickr.com/65535/49934168858_cacb00d790_o.jpg',
      'https://live.staticflickr.com/65535/49934682271_fd6a31becc_o.jpg',
      'https://live.staticflickr.com/65535/49956109906_f88d815772_o.jpg',
      'https://live.staticflickr.com/65535/49956109706_cffa847208_o.jpg',
      'https://live.staticflickr.com/65535/49956109671_859b323ede_o.jpg',
      'https://live.staticflickr.com/65535/49955609618_4cca01d581_o.jpg',
      'https://live.staticflickr.com/65535/49956396622_975c116b71_o.jpg',
      'https://live.staticflickr.com/65535/49955609378_9b77e5c771_o.jpg',
      'https://live.staticflickr.com/65535/49956396262_ef41c1d9b0_o.jpg',
    ],
    mission_patch_small: 'https://images2.imgbox.com/eb/0f/Vev7xkUX_o.png',
    mission_patch: 'https://images2.imgbox.com/ab/79/Wyc9K7fv_o.png',
    presskit:
      'https://www.nasa.gov/sites/default/files/atoms/files/commercialcrew_press_kit.pdf',
    reddit_campaign:
      'https://www.reddit.com/r/spacex/comments/fjf6rr/dm2_launch_campaign_thread/',
    reddit_launch:
      'https://www.reddit.com/r/spacex/comments/glwz6n/rspacex_cctcap_demonstration_mission_2_general',
    reddit_media:
      'https://www.reddit.com/r/spacex/comments/gp1gf5/rspacex_dm2_media_thread_photographer_contest/',
    reddit_recovery:
      'https://www.reddit.com/r/spacex/comments/gu5gkd/cctcap_demonstration_mission_2_stage_1_recovery/',
    video_link: 'https://youtu.be/xY96v0OIcK4',
    wikipedia: 'https://en.wikipedia.org/wiki/Crew_Dragon_Demo-2',
  },
  mission_id: ['EE86F74'],
  mission_name: 'CCtCap Demo Mission 2',
  rocket: {
    fairings: null,
    first_stage: {
      cores: [
        {
          block: 5,
          core: {
            asds_attempts: 2,
            asds_landings: 2,
            block: 5,
            id: 'B1058',
            missions: [
              {
                flight: 94,
                name: 'CCtCap Demo Mission 2',
              },
              {
                flight: 98,
                name: 'ANASIS-II',
              },
            ],
            original_launch: '2020-05-30T19:22:00.000Z',
            reuse_count: 1,
            rtls_attempts: 0,
            rtls_landings: 0,
            status: 'unknown',
            water_landing: false,
          },
          flight: 1,
          gridfins: true,
          land_success: true,
          landing_intent: true,
          landing_type: 'ASDS',
          landing_vehicle: 'OCISLY',
          legs: true,
          reused: false,
        },
      ],
    },
    rocket_name: 'Falcon 9',
    rocket_type: 'FT',
    rocket: {
      id: 'falcon9',
    },
    second_stage: {
      block: 5,
      payloads: [
        {
          id: null,
        },
      ],
    },
  },
  static_fire_date_unix: 1590169140,
  static_fire_date_utc: '2020-05-22T17:39:00.000Z',
  telemetry: {
    flight_club: null,
  },
  tentative_max_precision: 'hour',
  upcoming: false,
  ships: [
    { id: 'OCISLY' },
    { id: 'GOQUEST' },
    { id: 'GOSEARCHER' },
    { id: 'GONAVIGATOR' },
  ],
};
