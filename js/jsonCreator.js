var leagueDataArray = new Array();
var bronzeDataArray = new Array();
var silverDataArray = new Array();
var goldDataArray = new Array();
var platinumDataArray = new Array();
var diamondDataArray = new Array();
var masterDataArray = new Array();
var challengerDataArray = new Array();

bronzeDataArray = {
 'KDA_AVG': 2.432092,
 'WINRATE_AVG': 45.94,
 'VISION_AVG': 5.39,
 'TARGETCONTROL_AVG': 45.53,
 'KILLCONTRIBUTION_AVG': 46.97,
 'KDA_CRIT': 3.619116,
 'WINRATE_CRIT': 71.63218,
 'VISION_CRIT': 16.90,
 'TARGETCONTROL_CRIT': 69.22,
 'KILLCONTRIBUTION_CRIT': 56.94,
 'KILLS': 5.49,
 'DEATHS': 6.18,
 'ASSISTS': 9.33,
 'VISIONWARDS': 5.90,
 'WARDSPLACED': 120.12,
 'WARDSKILLED': 15.19,
 'DRAGONS': 16.12,
 'BARONS': 2.93,
 'TOWERS': 8.59,
 'INHIBITORS': 1.76,
 'RIFTHERALD': 2.01,
 'GAMELENGTH': 2001.50,
 'BE': 3.78,
 'BE_CRIT': 5.27,
 'TARGETCONTROL': 2.61,
 'DTPM_GENERAL': 737.46,
 'DPM_GENERAL': 513.08,
 'H_GENERAL': 147.2,
 'GPM': 343.25,
 'GPM_CRIT': 402.07,
 'CS_zeroToTenPerMatch_ADC': 41.22,
 'CS_ADC': 4.19,
 'D_ADC': 560.73,
 'DT_ADC': 610.92,
 'H_ADC': 101.54,
 'GPM_ADC': 352.6837,
 'VWPM_ADC': 0.03046178,
 'WKPM_ADC': 0.04490765,
 'WPPM_ADC': 0.3224142,
 'KC_ADC': 0,
 'KDA_ADC': 2.922381,
 'CS_zeroToTenPerMatch_MID': 46.21,
 'CS_MID': 4.20,
 'D_MID': 633.05,
 'DT_MID': 610.11,
 'H_MID': 73.63,
 'GPM_MID': 357.8383,
 'VWPM_MID': 0.03819287,
 'WKPM_MID': 0.03735367,
 'WPPM_MID': 0.3059004,
 'KC_MID': 0,
 'KDA_MID': 0,
 'CS_zeroToTenPerMatch_TOP': 46.05,
 'CS_TOP': 4.65,
 'D_TOP': 550.97,
 'DT_TOP': 875.08,
 'H_TOP': 156.68,
 'GPM_TOP': 0,
 'VWPM_TOP': 0,
 'WKPM_TOP': 0,
 'WPPM_TOP': 0,
 'KC_TOP': 0,
 'KDA_TOP': 0,
 'CS_zeroToTenPerMatch_JG': 5.61,
 'CS_JG': 1.85,
 'D_JG': 482.54,
 'DT_JG': 921.84,
 'H_JG': 247.97,
 'GPM_JG': 0,
 'VWPM_JG': 0,
 'WKPM_JG': 0,
 'WPPM_JG': 0,
 'KC_JG': 0,
 'KDA_JG': 0,
 'CS_zeroToTenPerMatch_SUP': 7.22,
 'CS_SUP': 1.09,
 'D_SUP': 317.00,
 'DT_SUP': 666.61,
 'H_SUP': 150.98,
 'GPM_SUP': 0,
 'VWPM_SUP': 0,
 'WKPM_SUP': 0,
 'WPPM_SUP': 0,
 'KC_SUP': 0,
 'KDA_SUP': 0 
};

silverDataArray = {
 'KDA_AVG': 2.670,
 'WINRATE_AVG': 49.04,
 'VISION_AVG': 8.078,
 'TARGETCONTROL_AVG': 50.745,
 'KILLCONTRIBUTION_AVG': 50.08,
 'KDA_CRIT': 3.619116,
 'WINRATE_CRIT': 73.72,
 'VISION_CRIT': 20.614,
 'TARGETCONTROL_CRIT': 76.043,
 'KILLCONTRIBUTION_CRIT': 59.62,
 'KILLS': 5.44,
 'DEATHS': 5.72,
 'ASSISTS': 8.64,
 'VISIONWARDS': 8.34,
 'WARDSPLACED': 125.36,
 'WARDSKILLED': 23.58,
 'DRAGONS': 15.70,
 'BARONS': 3.34,
 'TOWERS': 8.70,
 'INHIBITORS': 1.59,
 'RIFTHERALD': 2.31,
 'GAMELENGTH': 1977.85,
 'BE': 3.98,
 'BE_CRIT': 5.50,
 'TARGETCONTROL': 2.78,
 'DTPM_GENERAL': 720.16,
 'DPM_GENERAL': 535.10,
 'H_GENERAL': 152.43,
 'GPM': 354.97,
 'GPM_CRIT': 416.36,
 'CS_zeroToTenPerMatch_ADC': 51.64,
 'CS_ADC': 5.176738,
 'D_ADC': 575.1337,
 'DT_ADC': 584.8045,
 'H_ADC': 97.22983,
 'GPM_ADC': 0,
 'VWPM_ADC': 0,
 'WKPM_ADC': 0,
 'WPPM_ADC': 0,
 'KC_ADC': 0,
 'KDA_ADC': 0,
 'GPM_MID': 0,
 'VWPM_MID': 0,
 'WKPM_MID': 0,
 'WPPM_MID': 0,
 'KC_MID': 0,
 'KDA_MID': 0,
 'GPM_TOP': 0,
 'VWPM_TOP': 0,
 'WKPM_TOP': 0,
 'WPPM_TOP': 0,
 'KC_TOP': 0,
 'KDA_TOP': 0,
 'GPM_JG': 0,
 'VWPM_JG': 0,
 'WKPM_JG': 0,
 'WPPM_JG': 0,
 'KC_JG': 0,
 'KDA_JG': 0,
 'GPM_SUP': 0,
 'VWPM_SUP': 0,
 'WKPM_SUP': 0,
 'WPPM_SUP': 0,
 'KC_SUP': 0,
 'KDA_SUP': 0,
 'CS_zeroToTenPerMatch_MID': 52.84093,
 'CS_MID': 4.769194,
 'D_MID': 631.1428,
 'DT_MID': 607.8646,
 'H_MID': 81.85914,
 'CS_zeroToTenPerMatch_TOP': 52.06204,
 'CS_TOP': 5.18612,
 'D_TOP': 589.7158,
 'DT_TOP': 846.0083,
 'H_TOP': 146.6239,
 'CS_zeroToTenPerMatch_JG': 5.313088,
 'CS_JG': 2.086805,
 'D_JG': 462.8668,
 'DT_JG': 911.6442,
 'H_JG': 259.4577,
 'CS_zeroToTenPerMatch_SUP': 6.515254,
 'CS_SUP': 1.0459,
 'D_SUP': 293.3001,
 'DT_SUP': 632.5766,
 'H_SUP': 170.6871
};

goldDataArray = {
 'KDA_AVG': 2.73,
 'WINRATE_AVG': 48.85,
 'VISION_AVG': 10.55,
 'TARGETCONTROL_AVG': 54.64,
 'KILLCONTRIBUTION_AVG': 52.05,
 'KDA_CRIT': 4.10,
 'WINRATE_CRIT': 72.49,
 'VISION_CRIT': 25.21,
 'TARGETCONTROL_CRIT': 81.90,
 'KILLCONTRIBUTION_CRIT': 61.46,
 'KILLS': 5.34,
 'DEATHS': 5.35,
 'ASSISTS': 8.27,
 'VISIONWARDS': 10.16,
 'WARDSPLACED': 123.79,
 'WARDSKILLED': 29.30,
 'DRAGONS': 15.40,
 'BARONS': 3.67,
 'TOWERS': 9.19,
 'INHIBITORS': 1.72,
 'RIFTHERALD': 2.68,
 'GAMELENGTH': 1915.85,
 'BE': 4.38,
 'BE_CRIT': 6.44,
 'TARGETCONTROL': 3.07,
 'DTPM_GENERAL': 712.70,
 'DPM_GENERAL': 556.72,
 'H_GENERAL': 156.72,
 'GPM': 363.0175839,
 'GPM_CRIT': 434.6414259,
 'CS_zeroToTenPerMatch_ADC': 59.95434,
 'CS_ADC': 5.815613,
 'D_ADC': 655.2553,
 'DT_ADC': 572.5909,
 'H_ADC': 94.25504,
 'GPM_ADC': 0,
 'VWPM_ADC': 0,
 'WKPM_ADC': 0,
 'WPPM_ADC': 0,
 'KC_ADC': 0,
 'KDA_ADC': 0,
 'GPM_MID': 0,
 'VWPM_MID': 0,
 'WKPM_MID': 0,
 'WPPM_MID': 0,
 'KC_MID': 0,
 'KDA_MID': 0,
 'GPM_TOP': 0,
 'VWPM_TOP': 0,
 'WKPM_TOP': 0,
 'WPPM_TOP': 0,
 'KC_TOP': 0,
 'KDA_TOP': 0,
 'GPM_JG': 0,
 'VWPM_JG': 0,
 'WKPM_JG': 0,
 'WPPM_JG': 0,
 'KC_JG': 0,
 'KDA_JG': 0,
 'GPM_SUP': 0,
 'VWPM_SUP': 0,
 'WKPM_SUP': 0,
 'WPPM_SUP': 0,
 'KC_SUP': 0,
 'KDA_SUP': 0,
 'CS_zeroToTenPerMatch_MID': 57.04071,
 'CS_MID': 5.177813,
 'D_MID': 611.1606,
 'DT_MID': 604.8372,
 'H_MID': 78.37717,
 'CS_zeroToTenPerMatch_TOP': 56.27551,
 'CS_TOP': 5.610543,
 'D_TOP': 594.503,
 'DT_TOP': 858.05,
 'H_TOP': 152.0733,
 'CS_zeroToTenPerMatch_JG': 7.325333,
 'CS_JG': 2.242723,
 'D_JG': 500.6723,
 'DT_JG': 884.5847,
 'H_JG': 263.5943,
 'CS_zeroToTenPerMatch_SUP': 8.006389,
 'CS_SUP': 1.087654,
 'D_SUP': 268.9358,
 'DT_SUP': 646.7516,
 'H_SUP': 150.4234
};

platinumDataArray = {
 'KDA_AVG': 2.62,
 'WINRATE_AVG': 48.79,
 'VISION_AVG': 11.69,
 'TARGETCONTROL_AVG': 54.26,
 'KILLCONTRIBUTION_AVG': 51.92,
 'KDA_CRIT': 3.74,
 'WINRATE_CRIT': 73.72,
 'VISION_CRIT': 26.44,
 'TARGETCONTROL_CRIT': 79.06,
 'KILLCONTRIBUTION_CRIT': 60.64217406,
 'KILLS': 5.13,
 'DEATHS': 5.33,
 'ASSISTS': 8.08,
 'VISIONWARDS': 11.37,
 'WARDSPLACED': 125.75,
 'WARDSKILLED': 32.04,
 'DRAGONS': 14.81,
 'BARONS': 3.68,
 'TOWERS': 8.52,
 'INHIBITORS': 1.72,
 'RIFTHERALD': 2.80,
 'GAMELENGTH': 1875.84,
 'BE': 4.56,
 'BE_CRIT': 6.23,
 'TARGETCONTROL': 3.09,
 'DTPM_GENERAL': 711.53,
 'DPM_GENERAL': 549.106393,
 'H_GENERAL': 154.6209118,
 'GPM': 364.9824291,
 'GPM_CRIT': 422.4340578,
 'CS_zeroToTenPerMatch_ADC': 58.53614,
 'CS_ADC': 5.669069,
 'D_ADC': 620.6933,
 'DT_ADC': 594.6983,
 'H_ADC': 96.38024,
 'GPM_ADC': 0,
 'VWPM_ADC': 0,
 'WKPM_ADC': 0,
 'WPPM_ADC': 0,
 'KC_ADC': 0,
 'KDA_ADC': 0,
 'GPM_MID': 0,
 'VWPM_MID': 0,
 'WKPM_MID': 0,
 'WPPM_MID': 0,
 'KC_MID': 0,
 'KDA_MID': 0,
 'GPM_TOP': 0,
 'VWPM_TOP': 0,
 'WKPM_TOP': 0,
 'WPPM_TOP': 0,
 'KC_TOP': 0,
 'KDA_TOP': 0,
 'GPM_JG': 0,
 'VWPM_JG': 0,
 'WKPM_JG': 0,
 'WPPM_JG': 0,
 'KC_JG': 0,
 'KDA_JG': 0,
 'GPM_SUP': 0,
 'VWPM_SUP': 0,
 'WKPM_SUP': 0,
 'WPPM_SUP': 0,
 'KC_SUP': 0,
 'KDA_SUP': 0,
 'CS_zeroToTenPerMatch_MID': 58.08068,
 'CS_MID': 5.320488,
 'D_MID': 632.615,
 'DT_MID': 623.7903,
 'H_MID': 90.23448,
 'CS_zeroToTenPerMatch_TOP': 56.79487,
 'CS_TOP': 5.928681,
 'D_TOP': 548.1093,
 'DT_TOP': 839.3771,
 'H_TOP': 158.5227,
 'CS_zeroToTenPerMatch_JG': 7.685,
 'CS_JG': 2.233414,
 'D_JG': 479.1523,
 'DT_JG': 874.2897,
 'H_JG': 259.6069,
 'CS_zeroToTenPerMatch_SUP': 7.034375,
 'CS_SUP': 1.01271,
 'D_SUP': 280.3085,
 'DT_SUP': 610.5673,
 'H_SUP': 153.9793
};

diamondDataArray = {
 'KDA_AVG': 2.86,
 'WINRATE_AVG': 48.96,
 'VISION_AVG': 16.83,
 'TARGETCONTROL_AVG': 56.23,
 'KILLCONTRIBUTION_AVG': 53.54,
 'KDA_CRIT': 4.84,
 'WINRATE_CRIT': 73.97,
 'VISION_CRIT': 34.39,
 'TARGETCONTROL_CRIT': 81.93,
 'KILLCONTRIBUTION_CRIT': 62.44,
 'KILLS': 4.82,
 'DEATHS': 4.97,
 'ASSISTS': 8.10,
 'VISIONWARDS': 15.2,
 'WARDSPLACED': 138.02,
 'WARDSKILLED': 38.63,
 'DRAGONS': 13.89,
 'BARONS': 4.04,
 'TOWERS': 8.79,
 'INHIBITORS': 1.54,
 'RIFTHERALD': 3.11,
 'GAMELENGTH': 1817.89,
 'BE': 4.94,
 'BE_CRIT': 6.82,
 'TARGETCONTROL': 3.31,
 'DTPM_GENERAL': 709.1328223,
 'DPM_GENERAL': 548.3649939,
 'H_GENERAL': 158.9198297,
 'GPM': 371.7610833,
 'GPM_CRIT': 436.9838794,
 'CS_zeroToTenPerMatch_ADC': 60.03946,
 'CS_ADC': 6.020369,
 'D_ADC': 609.9212,
 'DT_ADC': 573.2934,
 'H_ADC': 92.19754,
 'GPM_ADC': 0,
 'VWPM_ADC': 0,
 'WKPM_ADC': 0,
 'WPPM_ADC': 0,
 'KC_ADC': 0,
 'KDA_ADC': 0,
 'GPM_MID': 0,
 'VWPM_MID': 0,
 'WKPM_MID': 0,
 'WPPM_MID': 0,
 'KC_MID': 0,
 'KDA_MID': 0,
 'GPM_TOP': 0,
 'VWPM_TOP': 0,
 'WKPM_TOP': 0,
 'WPPM_TOP': 0,
 'KC_TOP': 0,
 'KDA_TOP': 0,
  'GPM_JG': 0,
 'VWPM_JG': 0,
 'WKPM_JG': 0,
 'WPPM_JG': 0,
 'KC_JG': 0,
 'KDA_JG': 0,
 'GPM_SUP': 0,
 'VWPM_SUP': 0,
 'WKPM_SUP': 0,
 'WPPM_SUP': 0,
 'KC_SUP': 0,
 'KDA_SUP': 0,
 'CS_zeroToTenPerMatch_MID': 62.52217,
 'CS_MID': 5.842995,
 'D_MID': 588.9385,
 'DT_MID': 631.8092,
 'H_MID': 87.65604,
 'CS_zeroToTenPerMatch_TOP': 60.09566,
 'CS_TOP': 6.116665,
 'D_TOP': 578.2164,
 'DT_TOP': 836.7498,
 'H_TOP': 162.1128,
 'CS_zeroToTenPerMatch_JG': 10.81146,
 'CS_JG': 2.217632,
 'D_JG': 484.9831,
 'DT_JG': 874.3494,
 'H_JG': 263.1379,
 'CS_zeroToTenPerMatch_SUP': 6.735376,
 'CS_SUP': 1.013749,
 'D_SUP': 250.5981,
 'DT_SUP': 621.9626,
 'H_SUP': 180.3654
};

masterDataArray = {
 'KDA_AVG': 3.01,
 'WINRATE_AVG': 53.85,
 'VISION_AVG': 17.63,
 'TARGETCONTROL_AVG': 55.16,
 'KILLCONTRIBUTION_AVG': 53.72,
 'KDA_CRIT': 4.60,
 'WINRATE_CRIT': 78.98,
 'VISION_CRIT': 37.51,
 'TARGETCONTROL_CRIT': 80.53,
 'KILLCONTRIBUTION_CRIT': 63.55,
 'KILLS': 4.73,
 'DEATHS': 4.72,
 'ASSISTS': 7.98,
 'VISIONWARDS': 17.21,
 'WARDSPLACED': 138.88,
 'WARDSKILLED': 40.95,
 'DRAGONS': 12.48,
 'BARONS': 4.12,
 'TOWERS': 9.00,
 'INHIBITORS': 1.49,
 'RIFTHERALD': 3.38,
 'GAMELENGTH': 1756.21,
 'BE': 5.27,
 'BE_CRIT': 7.39,
 'TARGETCONTROL': 3.44,
 'DTPM_GENERAL': 728.6830523,
 'DPM_GENERAL': 552.7812422,
 'H_GENERAL': 172.9936269,
 'GPM': 379.7453191,
 'GPM_CRIT': 446.5143589,
 'CS_zeroToTenPerMatch_ADC': 61.99997,
 'CS_ADC': 6.184273,
 'D_ADC': 651.7377,
 'DT_ADC': 580.6486,
 'H_ADC': 100.0616,
  'GPM_ADC': 0,
 'VWPM_ADC': 0,
 'WKPM_ADC': 0,
 'WPPM_ADC': 0,
 'KC_ADC': 0,
 'KDA_ADC': 0,
 'CS_zeroToTenPerMatch_MID': 65.20282,
 'CS_MID': 6.106245,
 'D_MID': 623.9753,
 'DT_MID': 615.7327,
 'H_MID': 83.02311,
 'GPM_MID': 0,
 'VWPM_MID': 0,
 'WKPM_MID': 0,
 'WPPM_MID': 0,
 'KC_MID': 0,
 'KDA_MID': 0,
 'CS_zeroToTenPerMatch_TOP': 61.44952,
 'CS_TOP': 6.185975,
 'D_TOP': 563.8368,
 'DT_TOP': 855.0649,
 'H_TOP': 169.9538,
 'GPM_TOP': 0,
 'VWPM_TOP': 0,
 'WKPM_TOP': 0,
 'WPPM_TOP': 0,
 'KC_TOP': 0,
 'KDA_TOP': 0,
 'CS_zeroToTenPerMatch_JG': 9.99561,
 'CS_JG': 2.466477,
 'D_JG': 524.4744,
 'DT_JG': 904.1218,
 'H_JG': 285.8498,
 'GPM_JG': 0,
 'VWPM_JG': 0,
 'WKPM_JG': 0,
 'WPPM_JG': 0,
 'KC_JG': 0,
 'KDA_JG': 0,
 'CS_zeroToTenPerMatch_SUP': 7.458861,
 'CS_SUP': 1.013975,
 'D_SUP': 239.5489,
 'DT_SUP': 637.9768,
 'H_SUP': 173.4436,
 'GPM_SUP': 0,
 'VWPM_SUP': 0,
 'WKPM_SUP': 0,
 'WPPM_SUP': 0,
 'KC_SUP': 0,
 'KDA_SUP': 0
};

challengerDataArray = {
 'KDA_AVG': 3.16,
 'WINRATE_AVG': 56.83,
 'VISION_AVG': 20.87,
 'TARGETCONTROL_AVG': 55,
 'KILLCONTRIBUTION_AVG': 53.72,
 'KDA_CRIT': 4.87,
 'WINRATE_CRIT': 83.11,
 'VISION_CRIT': 39.84,
 'TARGETCONTROL_CRIT': 81.44,
 'KILLCONTRIBUTION_CRIT': 63.23,
 'KILLS': 5.03,
 'DEATHS': 4.51,
 'ASSISTS': 7.96,
 'VISIONWARDS': 21.05,
 'WARDSPLACED': 143.54,
 'WARDSKILLED': 42.98,
 'DRAGONS': 11.92,
 'BARONS': 4.39,
 'TOWERS': 10.11,
 'INHIBITORS': 1.60,
 'RIFTHERALD': 3.92,
 'GAMELENGTH': 1731.27,
 'BE': 5.59,
 'BE_CRIT': 7.62,
 'TARGETCONTROL': 3.75,
 'DTPM_GENERAL': 719.6077572,
 'DPM_GENERAL': 586.3033333,
 'H_GENERAL': 167.5259312,
 'GPM': 393.5036169,
 'GPM_CRIT': 460.729069,
 'CS_zeroToTenPerMatch_ADC': 64.00747,
 'CS_ADC': 6.48367,
 'D_ADC': 688.3789,
 'DT_ADC': 608.3339,
 'H_ADC': 109.4315,
 'GPM_ADC': 0,
 'VWPM_ADC': 0,
 'WKPM_ADC': 0,
 'WPPM_ADC': 0,
 'KC_ADC': 0,
 'KDA_ADC': 0,
 'CS_zeroToTenPerMatch_MID': 65.99967,
 'CS_MID': 6.28519,
 'D_MID': 645.2944,
 'DT_MID': 643.0063,
 'H_MID': 85.99746,
 'GPM_MID': 0,
 'VWPM_MID': 0,
 'WKPM_MID': 0,
 'WPPM_MID': 0,
 'KC_MID': 0,
 'KDA_MID': 0,
 'CS_zeroToTenPerMatch_TOP': 63.736,
 'CS_TOP': 6.446065,
 'D_TOP': 599.7133,
 'DT_TOP': 875.08,
 'H_TOP': 167.9741,
 'GPM_TOP': 0,
 'VWPM_TOP': 0,
 'WKPM_TOP': 0,
 'WPPM_TOP': 0,
 'KC_TOP': 0,
 'KDA_TOP': 0,
 'CS_zeroToTenPerMatch_JG': 14.59786,
 'CS_JG': 2.444959,
 'D_JG': 549.94,
 'DT_JG': 896.3726,
 'H_JG': 281.1807,
 'GPM_JG': 0,
 'VWPM_JG': 0,
 'WKPM_JG': 0,
 'WPPM_JG': 0,
 'KC_JG': 0,
 'KDA_JG': 0,
 'CS_zeroToTenPerMatch_SUP': 7.510244,
 'CS_SUP': 1.027085,
 'D_SUP': 263.1874,
 'DT_SUP': 635.4074,
 'H_SUP': 166.8783,
 'GPM_SUP': 0,
 'VWPM_SUP': 0,
 'WKPM_SUP': 0,
 'WPPM_SUP': 0,
 'KC_SUP': 0,
 'KDA_SUP': 0
};

leagueDataArray['BRONZE'] = bronzeDataArray;
leagueDataArray['SILVER'] = silverDataArray;
leagueDataArray['GOLD'] = goldDataArray;
leagueDataArray['PLATINUM'] = platinumDataArray;
leagueDataArray['DIAMOND'] = diamondDataArray;
leagueDataArray['MASTER'] = masterDataArray;
leagueDataArray['CHALLENGER'] = challengerDataArray;


var dataString = JSON.stringify(leagueDataArray);
var fs = require('fs');
fs.writeFileSync('leagueData.json', dataString);