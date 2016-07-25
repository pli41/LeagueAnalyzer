---
title: "LOL 05/23"
author: "Ziyu Guo"
date: "2016/05/23"
output: html_document
---


```{r, echo=FALSE, warning=FALSE}
library(readr)
Challenger <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/CHALLENGER/AnalyzedData(CHALLENGER)_1463142459494.csv")
Master <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/MASTER/AnalyzedData(MASTER)_1463215431339.csv")
Diamond1 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/DIAMOND/I/AnalyzedData(DIAMONDI)_1463210938368.csv")
Diamond2 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/DIAMOND/II/AnalyzedData(DIAMONDII)_1463210938368.csv")
Diamond3 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/DIAMOND/III/AnalyzedData(DIAMONDIII)_1463210938368.csv")
Diamond4 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/DIAMOND/IV/AnalyzedData(DIAMONDIV)_1463210938368.csv")
Diamond5 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/DIAMOND/V/AnalyzedData(DIAMONDV)_1463210938368.csv")
Diamond <-rbind(Diamond5,Diamond4,Diamond3,Diamond2,Diamond1)
Plat1 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/PLATINUM/I/AnalyzedData(PLATINUMI)_1463207317240.csv")
Plat2 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/PLATINUM/II/AnalyzedData(PLATINUMII)_1463207317240.csv")
Plat3 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/PLATINUM/III/AnalyzedData(PLATINUMIII)_1463207317240.csv")
Plat4 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/PLATINUM/IV/AnalyzedData(PLATINUMIV)_1463207317240.csv")
Plat5 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/PLATINUM/V/AnalyzedData(PLATINUMV)_1463207317240.csv")
Plat <- rbind(Plat1,Plat2,Plat3,Plat4,Plat5)
Gold1 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/GOLD/I/AnalyzedData(GOLDI)_1463203549660.csv")
Gold2 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/GOLD/II/AnalyzedData(GOLDII)_1463203549660.csv")
Gold3 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/GOLD/III/AnalyzedData(GOLDIII)_1463203549660.csv")
Gold4 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/GOLD/IV/AnalyzedData(GOLDIV)_1463203549660.csv")
Gold5 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/GOLD/V/AnalyzedData(GOLDV)_1463203549660.csv")
Gold <- rbind(Gold1,Gold2,Gold3,Gold4,Gold5)
Silver1 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/SILVER/I/AnalyzedData(SILVERI)_1463184753235.csv")
Silver2 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/SILVER/II/AnalyzedData(SILVERII)_1463184753235.csv")
Silver3 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/SILVER/III/AnalyzedData(SILVERIII)_1463184753235.csv")
Silver4 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/SILVER/IV/AnalyzedData(SILVERIV)_1463184753235.csv")
Silver5 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/SILVER/V/AnalyzedData(SILVERV)_1463184753235.csv")
Silver <- rbind(Silver1,Silver2,Silver3,Silver4,Silver5)
Bronze1 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/BRONZE/I/AnalyzedData(BRONZEI)_1463145146369.csv")
Bronze2 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/BRONZE/II/AnalyzedData(BRONZEII)_1463145146369.csv")
Bronze3 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/BRONZE/III/AnalyzedData(BRONZEIII)_1463145146369.csv")
Bronze4 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/BRONZE/IV/AnalyzedData(BRONZEIV)_1463145146369.csv")
Bronze5 <- read_csv("~/Desktop/LeagueAnalyzer/PlayerData/CSV/BRONZE/V/AnalyzedData(BRONZEV)_1463145146369.csv")
Bronze <- rbind(Bronze1,Bronze2,Bronze3,Bronze4,Bronze5)
############################# Convert 0 into NA ###############################
Challenger[, 28:167][Challenger[, 28:167] == 0] <- NA
Master[, 28:167][Master[, 28:167] == 0] <- NA
Diamond[, 28:167][Diamond[, 28:167] == 0] <- NA
Plat[, 28:167][Plat[, 28:167] == 0] <- NA
Gold[, 28:167][Gold[, 28:167] == 0] <- NA
Silver[, 28:167][Silver[, 28:167] == 0] <- NA
Bronze[, 28:167][Bronze[, 28:167] == 0] <- NA
```
# ADC
ADC Damage Dealt per minute
```{r}
Challenger_avg_D_ADC_per_min <- mean(Challenger$D_ADC/Challenger$PlayedLength_ADC,na.rm = TRUE)*60
Master_avg_D_ADC_per_min <- mean(Master$D_ADC/Master$PlayedLength_ADC,na.rm = TRUE)*60
Diamond_avg_D_ADC_per_min <- mean(Diamond$D_ADC/Diamond$PlayedLength_ADC,na.rm = TRUE)*60
Plat_avg_D_ADC_per_min <- mean(Plat$D_ADC/Plat$PlayedLength_ADC,na.rm = TRUE)*60
Gold_avg_D_ADC_per_min <- mean(Gold$D_ADC/Gold$PlayedLength_ADC,na.rm = TRUE)*60
Silver_avg_D_ADC_per_min <- mean(Silver$D_ADC/Silver$PlayedLength_ADC,na.rm = TRUE)*60
Bronze_avg_D_ADC_per_min <- mean(Bronze$D_ADC/Bronze$PlayedLength_ADC,na.rm = TRUE)*60
Avgtable_avg_D_ADC_per_min <- cbind(Challenger_avg_D_ADC_per_min,Master_avg_D_ADC_per_min,Diamond_avg_D_ADC_per_min,Plat_avg_D_ADC_per_min,Gold_avg_D_ADC_per_min,Silver_avg_D_ADC_per_min,Bronze_avg_D_ADC_per_min)
Avgtable_avg_D_ADC_per_min
```
ADC Damagen Taken per min
```{r}
Challenger_avg_DT_ADC_per_min <- mean(Challenger$DT_ADC/Challenger$PlayedLength_ADC,na.rm = TRUE)*60
Master_avg_DT_ADC_per_min <- mean(Master$DT_ADC/Master$PlayedLength_ADC,na.rm = TRUE)*60
Diamond_avg_DT_ADC_per_min <- mean(Diamond$DT_ADC/Diamond$PlayedLength_ADC,na.rm = TRUE)*60
Plat_avg_DT_ADC_per_min <- mean(Plat$DT_ADC/Plat$PlayedLength_ADC,na.rm = TRUE)*60
Gold_avg_DT_ADC_per_min <- mean(Gold$DT_ADC/Gold$PlayedLength_ADC,na.rm = TRUE)*60
Silver_avg_DT_ADC_per_min <- mean(Silver$DT_ADC/Silver$PlayedLength_ADC,na.rm = TRUE)*60
Bronze_avg_DT_ADC_per_min <- mean(Bronze$DT_ADC/Bronze$PlayedLength_ADC,na.rm = TRUE)*60
Avgtable_avg_DT_ADC_per_min <- cbind(Challenger_avg_DT_ADC_per_min,Master_avg_DT_ADC_per_min,Diamond_avg_DT_ADC_per_min,Plat_avg_DT_ADC_per_min,Gold_avg_DT_ADC_per_min,Silver_avg_DT_ADC_per_min,Bronze_avg_DT_ADC_per_min)
Avgtable_avg_DT_ADC_per_min
```
ADC CS in first 10 mins
```{r}
Challenger_CS_zeroToTen_ADC <- mean(Challenger$CS_zeroToTen_ADC,na.rm = TRUE)
Master_CS_zeroToTen_ADC <- mean(Master$CS_zeroToTen_ADC,na.rm = TRUE)
Diamond_CS_zeroToTen_ADC <- mean(Diamond$CS_zeroToTen_ADC,na.rm = TRUE)
Plat_CS_zeroToTen_ADC <- mean(Plat$CS_zeroToTen_ADC,na.rm = TRUE)
Gold_CS_zeroToTen_ADC <- mean(Gold$CS_zeroToTen_ADC,na.rm = TRUE)
Silver_CS_zeroToTen_ADC <- mean(Silver$CS_zeroToTen_ADC,na.rm = TRUE)
Bronze_CS_zeroToTen_ADC <- mean(Bronze$CS_zeroToTen_ADC,na.rm = TRUE)
AvgTable_CS_zeroToTen_ADC <- cbind(Challenger_CS_zeroToTen_ADC,Master_CS_zeroToTen_ADC,Diamond_CS_zeroToTen_ADC,Plat_CS_zeroToTen_ADC,Gold_CS_zeroToTen_ADC,Silver_CS_zeroToTen_ADC,Bronze_CS_zeroToTen_ADC)
AvgTable_CS_zeroToTen_ADC
```
ADC CS per min
```{r}
Challenger_avg_CS_ADC_per_min <- mean(Challenger$CS_ADC/Challenger$PlayedLength_ADC,na.rm = TRUE)*60
Master_avg_CS_ADC_per_min <- mean(Master$CS_ADC/Master$PlayedLength_ADC,na.rm = TRUE)*60
Diamond_avg_CS_ADC_per_min <- mean(Diamond$CS_ADC/Diamond$PlayedLength_ADC,na.rm = TRUE)*60
Plat_avg_CS_ADC_per_min <- mean(Plat$CS_ADC/Plat$PlayedLength_ADC,na.rm = TRUE)*60
Gold_avg_CS_ADC_per_min <- mean(Gold$CS_ADC/Gold$PlayedLength_ADC,na.rm = TRUE)*60
Silver_avg_CS_ADC_per_min <- mean(Silver$CS_ADC/Silver$PlayedLength_ADC,na.rm = TRUE)*60
Bronze_avg_CS_ADC_per_min <- mean(Bronze$CS_ADC/Bronze$PlayedLength_ADC,na.rm = TRUE)*60
AvgTable_avg_CS_ADC_per_min <- cbind(Challenger_avg_CS_ADC_per_min,Master_avg_CS_ADC_per_min,Diamond_avg_CS_ADC_per_min,Plat_avg_CS_ADC_per_min,Gold_avg_CS_ADC_per_min,Silver_avg_CS_ADC_per_min,Bronze_avg_CS_ADC_per_min)
AvgTable_avg_CS_ADC_per_min
```
ADC Healing per min
```{r}
Challenger_avg_H_ADC_per_min <- mean(Challenger$H_ADC/Challenger$PlayedLength_ADC,na.rm = TRUE)*60
Master_avg_H_ADC_per_min <- mean(Master$H_ADC/Master$PlayedLength_ADC,na.rm = TRUE)*60
Diamond_avg_H_ADC_per_min <- mean(Diamond$H_ADC/Diamond$PlayedLength_ADC,na.rm = TRUE)*60
Plat_avg_H_ADC_per_min <- mean(Plat$H_ADC/Plat$PlayedLength_ADC,na.rm = TRUE)*60
Gold_avg_H_ADC_per_min <- mean(Gold$H_ADC/Gold$PlayedLength_ADC,na.rm = TRUE)*60
Silver_avg_H_ADC_per_min <- mean(Silver$H_ADC/Silver$PlayedLength_ADC,na.rm = TRUE)*60
Bronze_avg_H_ADC_per_min <- mean(Bronze$H_ADC/Bronze$PlayedLength_ADC,na.rm = TRUE)*60
Avgtable_avg_H_ADC_per_min <- cbind(Challenger_avg_H_ADC_per_min,Master_avg_H_ADC_per_min,Diamond_avg_H_ADC_per_min,Plat_avg_H_ADC_per_min,Gold_avg_H_ADC_per_min,Silver_avg_H_ADC_per_min,Bronze_avg_H_ADC_per_min)
Avgtable_avg_H_ADC_per_min
```
ADC Gold per min
```{r}
Challenger_avg_G_ADC_per_min <- mean(Challenger$G_ADC/Challenger$PlayedLength_ADC,na.rm = TRUE)*60
Master_avg_G_ADC_per_min <- mean(Master$G_ADC/Master$PlayedLength_ADC,na.rm = TRUE)*60
Diamond_avg_G_ADC_per_min <- mean(Diamond$G_ADC/Diamond$PlayedLength_ADC,na.rm = TRUE)*60
Plat_avg_G_ADC_per_min <- mean(Plat$G_ADC/Plat$PlayedLength_ADC,na.rm = TRUE)*60
Gold_avg_G_ADC_per_min <- mean(Gold$G_ADC/Gold$PlayedLength_ADC,na.rm = TRUE)*60
Silver_avg_G_ADC_per_min <- mean(Silver$G_ADC/Silver$PlayedLength_ADC,na.rm = TRUE)*60
Bronze_avg_G_ADC_per_min <- mean(Bronze$G_ADC/Bronze$PlayedLength_ADC,na.rm = TRUE)*60
Avgtable_avg_G_ADC_per_min <- cbind(Challenger_avg_G_ADC_per_min,Master_avg_G_ADC_per_min,Diamond_avg_G_ADC_per_min,Plat_avg_G_ADC_per_min,Gold_avg_G_ADC_per_min,Silver_avg_G_ADC_per_min,Bronze_avg_G_ADC_per_min)
Avgtable_avg_G_ADC_per_min
```
ADC Kill per min
```{r}
Challenger_avg_K_ADC_per_min <- mean(Challenger$K_ADC/Challenger$PlayedLength_ADC,na.rm = TRUE)*60
Master_avg_K_ADC_per_min <- mean(Master$K_ADC/Master$PlayedLength_ADC,na.rm = TRUE)*60
Diamond_avg_K_ADC_per_min <- mean(Diamond$K_ADC/Diamond$PlayedLength_ADC,na.rm = TRUE)*60
Plat_avg_K_ADC_per_min <- mean(Plat$K_ADC/Plat$PlayedLength_ADC,na.rm = TRUE)*60
Gold_avg_K_ADC_per_min <- mean(Gold$K_ADC/Gold$PlayedLength_ADC,na.rm = TRUE)*60
Silver_avg_K_ADC_per_min <- mean(Silver$K_ADC/Silver$PlayedLength_ADC,na.rm = TRUE)*60
Bronze_avg_K_ADC_per_min <- mean(Bronze$K_ADC/Bronze$PlayedLength_ADC,na.rm = TRUE)*60
Avgtable_avg_K_ADC_per_min <- cbind(Challenger_avg_K_ADC_per_min,Master_avg_K_ADC_per_min,Diamond_avg_K_ADC_per_min,Plat_avg_K_ADC_per_min,Gold_avg_K_ADC_per_min,Silver_avg_K_ADC_per_min,Bronze_avg_K_ADC_per_min)
Avgtable_avg_K_ADC_per_min
```
ADC Death per min
```{r}
Challenger_avg_De_ADC_per_min <- mean(Challenger$De_ADC/Challenger$PlayedLength_ADC,na.rm = TRUE)*60
Master_avg_De_ADC_per_min <- mean(Master$De_ADC/Master$PlayedLength_ADC,na.rm = TRUE)*60
Diamond_avg_De_ADC_per_min <- mean(Diamond$De_ADC/Diamond$PlayedLength_ADC,na.rm = TRUE)*60
Plat_avg_De_ADC_per_min <- mean(Plat$De_ADC/Plat$PlayedLength_ADC,na.rm = TRUE)*60
Gold_avg_De_ADC_per_min <- mean(Gold$De_ADC/Gold$PlayedLength_ADC,na.rm = TRUE)*60
Silver_avg_De_ADC_per_min <- mean(Silver$De_ADC/Silver$PlayedLength_ADC,na.rm = TRUE)*60
Bronze_avg_De_ADC_per_min <- mean(Bronze$De_ADC/Bronze$PlayedLength_ADC,na.rm = TRUE)*60
Avgtable_avg_De_ADC_per_min <- cbind(Challenger_avg_De_ADC_per_min,Master_avg_De_ADC_per_min,Diamond_avg_De_ADC_per_min,Plat_avg_De_ADC_per_min,Gold_avg_De_ADC_per_min,Silver_avg_De_ADC_per_min,Bronze_avg_De_ADC_per_min)
Avgtable_avg_De_ADC_per_min
```
ADC Assist per min
```{r}
Challenger_avg_A_ADC_per_min <- mean(Challenger$A_ADC/Challenger$PlayedLength_ADC,na.rm = TRUE)*60
Master_avg_A_ADC_per_min <- mean(Master$A_ADC/Master$PlayedLength_ADC,na.rm = TRUE)*60
Diamond_avg_A_ADC_per_min <- mean(Diamond$A_ADC/Diamond$PlayedLength_ADC,na.rm = TRUE)*60
Plat_avg_A_ADC_per_min <- mean(Plat$A_ADC/Plat$PlayedLength_ADC,na.rm = TRUE)*60
Gold_avg_A_ADC_per_min <- mean(Gold$A_ADC/Gold$PlayedLength_ADC,na.rm = TRUE)*60
Silver_avg_A_ADC_per_min <- mean(Silver$A_ADC/Silver$PlayedLength_ADC,na.rm = TRUE)*60
Bronze_avg_A_ADC_per_min <- mean(Bronze$A_ADC/Bronze$PlayedLength_ADC,na.rm = TRUE)*60
Avgtable_avg_A_ADC_per_min <- cbind(Challenger_avg_A_ADC_per_min,Master_avg_A_ADC_per_min,Diamond_avg_A_ADC_per_min,Plat_avg_A_ADC_per_min,Gold_avg_A_ADC_per_min,Silver_avg_A_ADC_per_min,Bronze_avg_A_ADC_per_min)
Avgtable_avg_A_ADC_per_min
```
ADC Vision Ward per min
```{r}
Challenger_avg_VW_ADC_per_min <- mean(Challenger$VW_ADC/Challenger$PlayedLength_ADC,na.rm = TRUE)*60
Master_avg_VW_ADC_per_min <- mean(Master$VW_ADC/Master$PlayedLength_ADC,na.rm = TRUE)*60
Diamond_avg_VW_ADC_per_min <- mean(Diamond$VW_ADC/Diamond$PlayedLength_ADC,na.rm = TRUE)*60
Plat_avg_VW_ADC_per_min <- mean(Plat$VW_ADC/Plat$PlayedLength_ADC,na.rm = TRUE)*60
Gold_avg_VW_ADC_per_min <- mean(Gold$VW_ADC/Gold$PlayedLength_ADC,na.rm = TRUE)*60
Silver_avg_VW_ADC_per_min <- mean(Silver$VW_ADC/Silver$PlayedLength_ADC,na.rm = TRUE)*60
Bronze_avg_VW_ADC_per_min <- mean(Bronze$VW_ADC/Bronze$PlayedLength_ADC,na.rm = TRUE)*60
Avgtable_avg_VW_ADC_per_min <- cbind(Challenger_avg_VW_ADC_per_min,Master_avg_VW_ADC_per_min,Diamond_avg_VW_ADC_per_min,Plat_avg_VW_ADC_per_min,Gold_avg_VW_ADC_per_min,Silver_avg_VW_ADC_per_min,Bronze_avg_VW_ADC_per_min)
Avgtable_avg_VW_ADC_per_min
```
ADC Wards Kill per min
```{r}
Challenger_avg_WK_ADC_per_min <- mean(Challenger$WK_ADC/Challenger$PlayedLength_ADC,na.rm = TRUE)*60
Master_avg_WK_ADC_per_min <- mean(Master$WK_ADC/Master$PlayedLength_ADC,na.rm = TRUE)*60
Diamond_avg_WK_ADC_per_min <- mean(Diamond$WK_ADC/Diamond$PlayedLength_ADC,na.rm = TRUE)*60
Plat_avg_WK_ADC_per_min <- mean(Plat$WK_ADC/Plat$PlayedLength_ADC,na.rm = TRUE)*60
Gold_avg_WK_ADC_per_min <- mean(Gold$WK_ADC/Gold$PlayedLength_ADC,na.rm = TRUE)*60
Silver_avg_WK_ADC_per_min <- mean(Silver$WK_ADC/Silver$PlayedLength_ADC,na.rm = TRUE)*60
Bronze_avg_WK_ADC_per_min <- mean(Bronze$WK_ADC/Bronze$PlayedLength_ADC,na.rm = TRUE)*60
Avgtable_avg_WK_ADC_per_min <- cbind(Challenger_avg_WK_ADC_per_min,Master_avg_WK_ADC_per_min,Diamond_avg_WK_ADC_per_min,Plat_avg_WK_ADC_per_min,Gold_avg_WK_ADC_per_min,Silver_avg_WK_ADC_per_min,Bronze_avg_WK_ADC_per_min)
Avgtable_avg_WK_ADC_per_min
```
ADC Wards Placed per min
```{r}
Challenger_avg_WP_ADC_per_min <- mean(Challenger$WP_ADC/Challenger$PlayedLength_ADC,na.rm = TRUE)*60
Master_avg_WP_ADC_per_min <- mean(Master$WP_ADC/Master$PlayedLength_ADC,na.rm = TRUE)*60
Diamond_avg_WP_ADC_per_min <- mean(Diamond$WP_ADC/Diamond$PlayedLength_ADC,na.rm = TRUE)*60
Plat_avg_WP_ADC_per_min <- mean(Plat$WP_ADC/Plat$PlayedLength_ADC,na.rm = TRUE)*60
Gold_avg_WP_ADC_per_min <- mean(Gold$WP_ADC/Gold$PlayedLength_ADC,na.rm = TRUE)*60
Silver_avg_WP_ADC_per_min <- mean(Silver$WP_ADC/Silver$PlayedLength_ADC,na.rm = TRUE)*60
Bronze_avg_WP_ADC_per_min <- mean(Bronze$WP_ADC/Bronze$PlayedLength_ADC,na.rm = TRUE)*60
Avgtable_avg_WP_ADC_per_min <- cbind(Challenger_avg_WP_ADC_per_min,Master_avg_WP_ADC_per_min,Diamond_avg_WP_ADC_per_min,Plat_avg_WP_ADC_per_min,Gold_avg_WP_ADC_per_min,Silver_avg_WP_ADC_per_min,Bronze_avg_WP_ADC_per_min)
Avgtable_avg_WP_ADC_per_min
```
ADC Kill Contribution
```{r}
Challenger_KC_ADC <- mean(Challenger$KC_ADC,na.rm = TRUE)
Master_KC_ADC <- mean(Master$KC_ADC,na.rm = TRUE)
Diamond_KC_ADC <- mean(Diamond$KC_ADC,na.rm = TRUE)
Plat_KC_ADC <- mean(Plat$KC_ADC,na.rm = TRUE)
Gold_KC_ADC <- mean(Gold$KC_ADC,na.rm = TRUE)
Silver_KC_ADC <- mean(Silver$KC_ADC,na.rm = TRUE)
Bronze_KC_ADC <- mean(Bronze$KC_ADC,na.rm = TRUE)
AvgTable_KC_ADC <- cbind(Challenger_KC_ADC,Master_KC_ADC,Diamond_KC_ADC,Plat_KC_ADC,Gold_KC_ADC,Silver_KC_ADC,Bronze_KC_ADC)
AvgTable_KC_ADC
```
ADC KDA
```{r}
Challenger_KDA_ADC <- mean(Challenger$KDA_ADC,na.rm = TRUE)
Master_KDA_ADC <- mean(Master$KDA_ADC,na.rm = TRUE)
Diamond_KDA_ADC <- mean(Diamond$KDA_ADC,na.rm = TRUE)
Plat_KDA_ADC <- mean(Plat$KDA_ADC,na.rm = TRUE)
Gold_KDA_ADC <- mean(Gold$KDA_ADC,na.rm = TRUE)
Silver_KDA_ADC <- mean(Silver$KDA_ADC,na.rm = TRUE)
Bronze_KDA_ADC <- mean(Bronze$KDA_ADC,na.rm = TRUE)
AvgTable_KDA_ADC <- cbind(Challenger_KDA_ADC,Master_KDA_ADC,Diamond_KDA_ADC,Plat_KDA_ADC,Gold_KDA_ADC,Silver_KDA_ADC,Bronze_KDA_ADC)
AvgTable_KDA_ADC
```
ADC WinRate
```{r}
Challenger_WinRate_ADC <- mean(Challenger$WinRate_ADC,na.rm = TRUE)
Master_WinRate_ADC <- mean(Master$WinRate_ADC,na.rm = TRUE)
Diamond_WinRate_ADC <- mean(Diamond$WinRate_ADC,na.rm = TRUE)
Plat_WinRate_ADC <- mean(Plat$WinRate_ADC,na.rm = TRUE)
Gold_WinRate_ADC <- mean(Gold$WinRate_ADC,na.rm = TRUE)
Silver_WinRate_ADC <- mean(Silver$WinRate_ADC,na.rm = TRUE)
Bronze_WinRate_ADC <- mean(Bronze$WinRate_ADC,na.rm = TRUE)
AvgTable_WinRate_ADC <- cbind(Challenger_WinRate_ADC,Master_WinRate_ADC,Diamond_WinRate_ADC,Plat_WinRate_ADC,Gold_WinRate_ADC,Silver_WinRate_ADC,Bronze_WinRate_ADC)
AvgTable_WinRate_ADC
```
ADC CC per min
```{r}
Challenger_avg_CC_ADC_per_min <- mean(Challenger$CC_ADC/Challenger$PlayedLength_ADC,na.rm = TRUE)*60
Master_avg_CC_ADC_per_min <- mean(Master$CC_ADC/Master$PlayedLength_ADC,na.rm = TRUE)*60
Diamond_avg_CC_ADC_per_min <- mean(Diamond$CC_ADC/Diamond$PlayedLength_ADC,na.rm = TRUE)*60
Plat_avg_CC_ADC_per_min <- mean(Plat$CC_ADC/Plat$PlayedLength_ADC,na.rm = TRUE)*60
Gold_avg_CC_ADC_per_min <- mean(Gold$CC_ADC/Gold$PlayedLength_ADC,na.rm = TRUE)*60
Silver_avg_CC_ADC_per_min <- mean(Silver$CC_ADC/Silver$PlayedLength_ADC,na.rm = TRUE)*60
Bronze_avg_CC_ADC_per_min <- mean(Bronze$CC_ADC/Bronze$PlayedLength_ADC,na.rm = TRUE)*60
Avgtable_avg_CC_ADC_per_min <- cbind(Challenger_avg_CC_ADC_per_min,Master_avg_CC_ADC_per_min,Diamond_avg_CC_ADC_per_min,Plat_avg_CC_ADC_per_min,Gold_avg_CC_ADC_per_min,Silver_avg_CC_ADC_per_min,Bronze_avg_CC_ADC_per_min)
Avgtable_avg_CC_ADC_per_min
```
ADC FB Contribution
```{r}
Challenger_FBContribution_ADC <- mean(Challenger$FBContribution_ADC,na.rm = TRUE)
Master_FBContribution_ADC <- mean(Master$FBContribution_ADC,na.rm = TRUE)
Diamond_FBContribution_ADC <- mean(Diamond$FBContribution_ADC,na.rm = TRUE)
Plat_FBContribution_ADC <- mean(Plat$FBContribution_ADC,na.rm = TRUE)
Gold_FBContribution_ADC <- mean(Gold$FBContribution_ADC,na.rm = TRUE)
Silver_FBContribution_ADC <- mean(Silver$FBContribution_ADC,na.rm = TRUE)
Bronze_FBContribution_ADC <- mean(Bronze$FBContribution_ADC,na.rm = TRUE)
AvgTable_FBContribution_ADC <- cbind(Challenger_FBContribution_ADC,Master_FBContribution_ADC,Diamond_FBContribution_ADC,Plat_FBContribution_ADC,Gold_FBContribution_ADC,Silver_FBContribution_ADC,Bronze_FBContribution_ADC)
AvgTable_FBContribution_ADC
```
ADC Killing Sprees
```{r}
Challenger_KillSprees_ADC <- mean(Challenger$KillSprees_ADC,na.rm = TRUE)
Master_KillSprees_ADC <- mean(Master$KillSprees_ADC,na.rm = TRUE)
Diamond_KillSprees_ADC <- mean(Diamond$KillSprees_ADC,na.rm = TRUE)
Plat_KillSprees_ADC <- mean(Plat$KillSprees_ADC,na.rm = TRUE)
Gold_KillSprees_ADC <- mean(Gold$KillSprees_ADC,na.rm = TRUE)
Silver_KillSprees_ADC <- mean(Silver$KillSprees_ADC,na.rm = TRUE)
Bronze_KillSprees_ADC <- mean(Bronze$KillSprees_ADC,na.rm = TRUE)
AvgTable_KillSprees_ADC <- cbind(Challenger_KillSprees_ADC,Master_KillSprees_ADC,Diamond_KillSprees_ADC,Plat_KillSprees_ADC,Gold_KillSprees_ADC,Silver_KillSprees_ADC,Bronze_KillSprees_ADC)
AvgTable_KillSprees_ADC
```
ADC Largest Killing Sprees
```{r}
Challenger_LargestKillingSpree_ADC <- mean(Challenger$LargestKillingSpree_ADC,na.rm = TRUE)
Master_LargestKillingSpree_ADC <- mean(Master$LargestKillingSpree_ADC,na.rm = TRUE)
Diamond_LargestKillingSpree_ADC <- mean(Diamond$LargestKillingSpree_ADC,na.rm = TRUE)
Plat_LargestKillingSpree_ADC <- mean(Plat$LargestKillingSpree_ADC,na.rm = TRUE)
Gold_LargestKillingSpree_ADC <- mean(Gold$LargestKillingSpree_ADC,na.rm = TRUE)
Silver_LargestKillingSpree_ADC <- mean(Silver$LargestKillingSpree_ADC,na.rm = TRUE)
Bronze_LargestKillingSpree_ADC <- mean(Bronze$LargestKillingSpree_ADC,na.rm = TRUE)
AvgTable_LargestKillingSpree_ADC <- cbind(Challenger_LargestKillingSpree_ADC,Master_LargestKillingSpree_ADC,Diamond_LargestKillingSpree_ADC,Plat_LargestKillingSpree_ADC,Gold_LargestKillingSpree_ADC,Silver_LargestKillingSpree_ADC,Bronze_LargestKillingSpree_ADC)
AvgTable_LargestKillingSpree_ADC
```
ADC CS Difference per min 0-10 min
```{r}
Challenger_avg_CSDiffPerMin_zeroToTen_ADC_per_min <- mean(Challenger$CSDiffPerMin_zeroToTen_ADC/Challenger$PlayedLength_ADC,na.rm = TRUE)*60
Master_avg_CSDiffPerMin_zeroToTen_ADC_per_min <- mean(Master$CSDiffPerMin_zeroToTen_ADC/Master$PlayedLength_ADC,na.rm = TRUE)*60
Diamond_avg_CSDiffPerMin_zeroToTen_ADC_per_min <- mean(Diamond$CSDiffPerMin_zeroToTen_ADC/Diamond$PlayedLength_ADC,na.rm = TRUE)*60
Plat_avg_CSDiffPerMin_zeroToTen_ADC_per_min <- mean(Plat$CSDiffPerMin_zeroToTen_ADC/Plat$PlayedLength_ADC,na.rm = TRUE)*60
Gold_avg_CSDiffPerMin_zeroToTen_ADC_per_min <- mean(Gold$CSDiffPerMin_zeroToTen_ADC/Gold$PlayedLength_ADC,na.rm = TRUE)*60
Silver_avg_CSDiffPerMin_zeroToTen_ADC_per_min <- mean(Silver$CSDiffPerMin_zeroToTen_ADC/Silver$PlayedLength_ADC,na.rm = TRUE)*60
Bronze_avg_CSDiffPerMin_zeroToTen_ADC_per_min <- mean(Bronze$CSDiffPerMin_zeroToTen_ADC/Bronze$PlayedLength_ADC,na.rm = TRUE)*60
Avgtable_avg_CSDiffPerMin_zeroToTen_ADC_per_min <- cbind(Challenger_avg_CSDiffPerMin_zeroToTen_ADC_per_min,Master_avg_CSDiffPerMin_zeroToTen_ADC_per_min,Diamond_avg_CSDiffPerMin_zeroToTen_ADC_per_min,Plat_avg_CSDiffPerMin_zeroToTen_ADC_per_min,Gold_avg_CSDiffPerMin_zeroToTen_ADC_per_min,Silver_avg_CSDiffPerMin_zeroToTen_ADC_per_min,Bronze_avg_CSDiffPerMin_zeroToTen_ADC_per_min)
Avgtable_avg_CSDiffPerMin_zeroToTen_ADC_per_min
```
ADC XP per min 0-10 min
```{r}
Challenger_avg_XPPerMin_zeroToTen_ADC_per_min <- mean(Challenger$XPPerMin_zeroToTen_ADC/Challenger$PlayedLength_ADC,na.rm = TRUE)*60
Master_avg_XPPerMin_zeroToTen_ADC_per_min <- mean(Master$XPPerMin_zeroToTen_ADC/Master$PlayedLength_ADC,na.rm = TRUE)*60
Diamond_avg_XPPerMin_zeroToTen_ADC_per_min <- mean(Diamond$XPPerMin_zeroToTen_ADC/Diamond$PlayedLength_ADC,na.rm = TRUE)*60
Plat_avg_XPPerMin_zeroToTen_ADC_per_min <- mean(Plat$XPPerMin_zeroToTen_ADC/Plat$PlayedLength_ADC,na.rm = TRUE)*60
Gold_avg_XPPerMin_zeroToTen_ADC_per_min <- mean(Gold$XPPerMin_zeroToTen_ADC/Gold$PlayedLength_ADC,na.rm = TRUE)*60
Silver_avg_XPPerMin_zeroToTen_ADC_per_min <- mean(Silver$XPPerMin_zeroToTen_ADC/Silver$PlayedLength_ADC,na.rm = TRUE)*60
Bronze_avg_XPPerMin_zeroToTen_ADC_per_min <- mean(Bronze$XPPerMin_zeroToTen_ADC/Bronze$PlayedLength_ADC,na.rm = TRUE)*60
Avgtable_avg_XPPerMin_zeroToTen_ADC_per_min <- cbind(Challenger_avg_XPPerMin_zeroToTen_ADC_per_min,Master_avg_XPPerMin_zeroToTen_ADC_per_min,Diamond_avg_XPPerMin_zeroToTen_ADC_per_min,Plat_avg_XPPerMin_zeroToTen_ADC_per_min,Gold_avg_XPPerMin_zeroToTen_ADC_per_min,Silver_avg_XPPerMin_zeroToTen_ADC_per_min,Bronze_avg_XPPerMin_zeroToTen_ADC_per_min)
Avgtable_avg_XPPerMin_zeroToTen_ADC_per_min
```
ADC XP per min 0-30 min
```{r}
Challenger_avg_XPPerMin_zeroToThirty_ADC_per_min <- mean(Challenger$XPPerMin_zeroToThirty_ADC/Challenger$PlayedLength_ADC,na.rm = TRUE)*60
Master_avg_XPPerMin_zeroToThirty_ADC_per_min <- mean(Master$XPPerMin_zeroToThirty_ADC/Master$PlayedLength_ADC,na.rm = TRUE)*60
Diamond_avg_XPPerMin_zeroToThirty_ADC_per_min <- mean(Diamond$XPPerMin_zeroToThirty_ADC/Diamond$PlayedLength_ADC,na.rm = TRUE)*60
Plat_avg_XPPerMin_zeroToThirty_ADC_per_min <- mean(Plat$XPPerMin_zeroToThirty_ADC/Plat$PlayedLength_ADC,na.rm = TRUE)*60
Gold_avg_XPPerMin_zeroToThirty_ADC_per_min <- mean(Gold$XPPerMin_zeroToThirty_ADC/Gold$PlayedLength_ADC,na.rm = TRUE)*60
Silver_avg_XPPerMin_zeroToThirty_ADC_per_min <- mean(Silver$XPPerMin_zeroToThirty_ADC/Silver$PlayedLength_ADC,na.rm = TRUE)*60
Bronze_avg_XPPerMin_zeroToThirty_ADC_per_min <- mean(Bronze$XPPerMin_zeroToThirty_ADC/Bronze$PlayedLength_ADC,na.rm = TRUE)*60
Avgtable_avg_XPPerMin_zeroToThirty_ADC_per_min <- cbind(Challenger_avg_XPPerMin_zeroToThirty_ADC_per_min,Master_avg_XPPerMin_zeroToThirty_ADC_per_min,Diamond_avg_XPPerMin_zeroToThirty_ADC_per_min,Plat_avg_XPPerMin_zeroToThirty_ADC_per_min,Gold_avg_XPPerMin_zeroToThirty_ADC_per_min,Silver_avg_XPPerMin_zeroToThirty_ADC_per_min,Bronze_avg_XPPerMin_zeroToThirty_ADC_per_min)
Avgtable_avg_XPPerMin_zeroToThirty_ADC_per_min
```
ADC XP Difference per min 0-10
```{r}
Challenger_avg_XPDiffPerMin_zeroToTen_ADC_per_min <- mean(Challenger$XPDiffPerMin_zeroToTen_ADC/Challenger$PlayedLength_ADC,na.rm = TRUE)*60
Master_avg_XPDiffPerMin_zeroToTen_ADC_per_min <- mean(Master$XPDiffPerMin_zeroToTen_ADC/Master$PlayedLength_ADC,na.rm = TRUE)*60
Diamond_avg_XPDiffPerMin_zeroToTen_ADC_per_min <- mean(Diamond$XPDiffPerMin_zeroToTen_ADC/Diamond$PlayedLength_ADC,na.rm = TRUE)*60
Plat_avg_XPDiffPerMin_zeroToTen_ADC_per_min <- mean(Plat$XPDiffPerMin_zeroToTen_ADC/Plat$PlayedLength_ADC,na.rm = TRUE)*60
Gold_avg_XPDiffPerMin_zeroToTen_ADC_per_min <- mean(Gold$XPDiffPerMin_zeroToTen_ADC/Gold$PlayedLength_ADC,na.rm = TRUE)*60
Silver_avg_XPDiffPerMin_zeroToTen_ADC_per_min <- mean(Silver$XPDiffPerMin_zeroToTen_ADC/Silver$PlayedLength_ADC,na.rm = TRUE)*60
Bronze_avg_XPDiffPerMin_zeroToTen_ADC_per_min <- mean(Bronze$XPDiffPerMin_zeroToTen_ADC/Bronze$PlayedLength_ADC,na.rm = TRUE)*60
Avgtable_avg_XPDiffPerMin_zeroToTen_ADC_per_min <- cbind(Challenger_avg_XPDiffPerMin_zeroToTen_ADC_per_min,Master_avg_XPDiffPerMin_zeroToTen_ADC_per_min,Diamond_avg_XPDiffPerMin_zeroToTen_ADC_per_min,Plat_avg_XPDiffPerMin_zeroToTen_ADC_per_min,Gold_avg_XPDiffPerMin_zeroToTen_ADC_per_min,Silver_avg_XPDiffPerMin_zeroToTen_ADC_per_min,Bronze_avg_XPDiffPerMin_zeroToTen_ADC_per_min)
Avgtable_avg_XPDiffPerMin_zeroToTen_ADC_per_min
```
ADC XP Difference per min 10-20
```{r}
Challenger_avg_XPDiffPerMin_tenToTwenty_ADC_per_min <- mean(Challenger$XPDiffPerMin_tenToTwenty_ADC/Challenger$PlayedLength_ADC,na.rm = TRUE)*60
Master_avg_XPDiffPerMin_tenToTwenty_ADC_per_min <- mean(Master$XPDiffPerMin_tenToTwenty_ADC/Master$PlayedLength_ADC,na.rm = TRUE)*60
Diamond_avg_XPDiffPerMin_tenToTwenty_ADC_per_min <- mean(Diamond$XPDiffPerMin_tenToTwenty_ADC/Diamond$PlayedLength_ADC,na.rm = TRUE)*60
Plat_avg_XPDiffPerMin_tenToTwenty_ADC_per_min <- mean(Plat$XPDiffPerMin_tenToTwenty_ADC/Plat$PlayedLength_ADC,na.rm = TRUE)*60
Gold_avg_XPDiffPerMin_tenToTwenty_ADC_per_min <- mean(Gold$XPDiffPerMin_tenToTwenty_ADC/Gold$PlayedLength_ADC,na.rm = TRUE)*60
Silver_avg_XPDiffPerMin_tenToTwenty_ADC_per_min <- mean(Silver$XPDiffPerMin_tenToTwenty_ADC/Silver$PlayedLength_ADC,na.rm = TRUE)*60
Bronze_avg_XPDiffPerMin_tenToTwenty_ADC_per_min <- mean(Bronze$XPDiffPerMin_tenToTwenty_ADC/Bronze$PlayedLength_ADC,na.rm = TRUE)*60
Avgtable_avg_XPDiffPerMin_tenToTwenty_ADC_per_min <- cbind(Challenger_avg_XPDiffPerMin_tenToTwenty_ADC_per_min,Master_avg_XPDiffPerMin_tenToTwenty_ADC_per_min,Diamond_avg_XPDiffPerMin_tenToTwenty_ADC_per_min,Plat_avg_XPDiffPerMin_tenToTwenty_ADC_per_min,Gold_avg_XPDiffPerMin_tenToTwenty_ADC_per_min,Silver_avg_XPDiffPerMin_tenToTwenty_ADC_per_min,Bronze_avg_XPDiffPerMin_tenToTwenty_ADC_per_min)
Avgtable_avg_XPDiffPerMin_tenToTwenty_ADC_per_min
```
ADC XP Difference per min 20-30
```{r}
Challenger_avg_XPDiffPerMin_twentyToThirty_ADC_per_min <- mean(Challenger$XPDiffPerMin_twentyToThirty_ADC/Challenger$PlayedLength_ADC,na.rm = TRUE)*60
Master_avg_XPDiffPerMin_twentyToThirty_ADC_per_min <- mean(Master$XPDiffPerMin_twentyToThirty_ADC/Master$PlayedLength_ADC,na.rm = TRUE)*60
Diamond_avg_XPDiffPerMin_twentyToThirty_ADC_per_min <- mean(Diamond$XPDiffPerMin_twentyToThirty_ADC/Diamond$PlayedLength_ADC,na.rm = TRUE)*60
Plat_avg_XPDiffPerMin_twentyToThirty_ADC_per_min <- mean(Plat$XPDiffPerMin_twentyToThirty_ADC/Plat$PlayedLength_ADC,na.rm = TRUE)*60
Gold_avg_XPDiffPerMin_twentyToThirty_ADC_per_min <- mean(Gold$XPDiffPerMin_twentyToThirty_ADC/Gold$PlayedLength_ADC,na.rm = TRUE)*60
Silver_avg_XPDiffPerMin_twentyToThirty_ADC_per_min <- mean(Silver$XPDiffPerMin_twentyToThirty_ADC/Silver$PlayedLength_ADC,na.rm = TRUE)*60
Bronze_avg_XPDiffPerMin_twentyToThirty_ADC_per_min <- mean(Bronze$XPDiffPerMin_twentyToThirty_ADC/Bronze$PlayedLength_ADC,na.rm = TRUE)*60
Avgtable_avg_XPDiffPerMin_twentyToThirty_ADC_per_min <- cbind(Challenger_avg_XPDiffPerMin_twentyToThirty_ADC_per_min,Master_avg_XPDiffPerMin_twentyToThirty_ADC_per_min,Diamond_avg_XPDiffPerMin_twentyToThirty_ADC_per_min,Plat_avg_XPDiffPerMin_twentyToThirty_ADC_per_min,Gold_avg_XPDiffPerMin_twentyToThirty_ADC_per_min,Silver_avg_XPDiffPerMin_twentyToThirty_ADC_per_min,Bronze_avg_XPDiffPerMin_twentyToThirty_ADC_per_min)
Avgtable_avg_XPDiffPerMin_twentyToThirty_ADC_per_min
```
ADC Team Gold Percentage
```{r}
Challenger_TeamGoldPercent_ADC <- mean(Challenger$TeamGoldPercent_ADC,na.rm = TRUE)
Master_TeamGoldPercent_ADC <- mean(Master$TeamGoldPercent_ADC,na.rm = TRUE)
Diamond_TeamGoldPercent_ADC <- mean(Diamond$TeamGoldPercent_ADC,na.rm = TRUE)
Plat_TeamGoldPercent_ADC <- mean(Plat$TeamGoldPercent_ADC,na.rm = TRUE)
Gold_TeamGoldPercent_ADC <- mean(Gold$TeamGoldPercent_ADC,na.rm = TRUE)
Silver_TeamGoldPercent_ADC <- mean(Silver$TeamGoldPercent_ADC,na.rm = TRUE)
Bronze_TeamGoldPercent_ADC <- mean(Bronze$TeamGoldPercent_ADC,na.rm = TRUE)
AvgTable_TeamGoldPercent_ADC <- cbind(Challenger_TeamGoldPercent_ADC,Master_TeamGoldPercent_ADC,Diamond_TeamGoldPercent_ADC,Plat_TeamGoldPercent_ADC,Gold_TeamGoldPercent_ADC,Silver_TeamGoldPercent_ADC,Bronze_TeamGoldPercent_ADC)
AvgTable_TeamGoldPercent_ADC
```
ADC Team Damage Percentage
```{r}
Challenger_TeamDamagePercent_ADC <- mean(Challenger$TeamDamagePercent_ADC,na.rm = TRUE)
Master_TeamDamagePercent_ADC <- mean(Master$TeamDamagePercent_ADC,na.rm = TRUE)
Diamond_TeamDamagePercent_ADC <- mean(Diamond$TeamDamagePercent_ADC,na.rm = TRUE)
Plat_TeamDamagePercent_ADC <- mean(Plat$TeamDamagePercent_ADC,na.rm = TRUE)
Gold_TeamDamagePercent_ADC <- mean(Gold$TeamDamagePercent_ADC,na.rm = TRUE)
Silver_TeamDamagePercent_ADC <- mean(Silver$TeamDamagePercent_ADC,na.rm = TRUE)
Bronze_TeamDamagePercent_ADC <- mean(Bronze$TeamDamagePercent_ADC,na.rm = TRUE)
AvgTable_TeamDamagePercent_ADC <- cbind(Challenger_TeamDamagePercent_ADC,Master_TeamDamagePercent_ADC,Diamond_TeamDamagePercent_ADC,Plat_TeamDamagePercent_ADC,Gold_TeamDamagePercent_ADC,Silver_TeamDamagePercent_ADC,Bronze_TeamDamagePercent_ADC)
AvgTable_TeamDamagePercent_ADC
```




# MID
MID Damage Dealt per minute
```{r}
Challenger_avg_D_MID_per_min <- mean(Challenger$D_MID/Challenger$PlayedLength_MID,na.rm = TRUE)*60
Master_avg_D_MID_per_min <- mean(Master$D_MID/Master$PlayedLength_MID,na.rm = TRUE)*60
Diamond_avg_D_MID_per_min <- mean(Diamond$D_MID/Diamond$PlayedLength_MID,na.rm = TRUE)*60
Plat_avg_D_MID_per_min <- mean(Plat$D_MID/Plat$PlayedLength_MID,na.rm = TRUE)*60
Gold_avg_D_MID_per_min <- mean(Gold$D_MID/Gold$PlayedLength_MID,na.rm = TRUE)*60
Silver_avg_D_MID_per_min <- mean(Silver$D_MID/Silver$PlayedLength_MID,na.rm = TRUE)*60
Bronze_avg_D_MID_per_min <- mean(Bronze$D_MID/Bronze$PlayedLength_MID,na.rm = TRUE)*60
Avgtable_avg_D_MID_per_min <- cbind(Challenger_avg_D_MID_per_min,Master_avg_D_MID_per_min,Diamond_avg_D_MID_per_min,Plat_avg_D_MID_per_min,Gold_avg_D_MID_per_min,Silver_avg_D_MID_per_min,Bronze_avg_D_MID_per_min)
Avgtable_avg_D_MID_per_min
```
MID Damagen Taken per min
```{r}
Challenger_avg_DT_MID_per_min <- mean(Challenger$DT_MID/Challenger$PlayedLength_MID,na.rm = TRUE)*60
Master_avg_DT_MID_per_min <- mean(Master$DT_MID/Master$PlayedLength_MID,na.rm = TRUE)*60
Diamond_avg_DT_MID_per_min <- mean(Diamond$DT_MID/Diamond$PlayedLength_MID,na.rm = TRUE)*60
Plat_avg_DT_MID_per_min <- mean(Plat$DT_MID/Plat$PlayedLength_MID,na.rm = TRUE)*60
Gold_avg_DT_MID_per_min <- mean(Gold$DT_MID/Gold$PlayedLength_MID,na.rm = TRUE)*60
Silver_avg_DT_MID_per_min <- mean(Silver$DT_MID/Silver$PlayedLength_MID,na.rm = TRUE)*60
Bronze_avg_DT_MID_per_min <- mean(Bronze$DT_MID/Bronze$PlayedLength_MID,na.rm = TRUE)*60
Avgtable_avg_DT_MID_per_min <- cbind(Challenger_avg_DT_MID_per_min,Master_avg_DT_MID_per_min,Diamond_avg_DT_MID_per_min,Plat_avg_DT_MID_per_min,Gold_avg_DT_MID_per_min,Silver_avg_DT_MID_per_min,Bronze_avg_DT_MID_per_min)
Avgtable_avg_DT_MID_per_min
```
MID CS in first 10 mins
```{r}
Challenger_CS_zeroToTen_MID <- mean(Challenger$CS_zeroToTen_MID,na.rm = TRUE)
Master_CS_zeroToTen_MID <- mean(Master$CS_zeroToTen_MID,na.rm = TRUE)
Diamond_CS_zeroToTen_MID <- mean(Diamond$CS_zeroToTen_MID,na.rm = TRUE)
Plat_CS_zeroToTen_MID <- mean(Plat$CS_zeroToTen_MID,na.rm = TRUE)
Gold_CS_zeroToTen_MID <- mean(Gold$CS_zeroToTen_MID,na.rm = TRUE)
Silver_CS_zeroToTen_MID <- mean(Silver$CS_zeroToTen_MID,na.rm = TRUE)
Bronze_CS_zeroToTen_MID <- mean(Bronze$CS_zeroToTen_MID,na.rm = TRUE)
AvgTable_CS_zeroToTen_MID <- cbind(Challenger_CS_zeroToTen_MID,Master_CS_zeroToTen_MID,Diamond_CS_zeroToTen_MID,Plat_CS_zeroToTen_MID,Gold_CS_zeroToTen_MID,Silver_CS_zeroToTen_MID,Bronze_CS_zeroToTen_MID)
AvgTable_CS_zeroToTen_MID
```
MID CS per min
```{r}
Challenger_avg_CS_MID_per_min <- mean(Challenger$CS_MID/Challenger$PlayedLength_MID,na.rm = TRUE)*60
Master_avg_CS_MID_per_min <- mean(Master$CS_MID/Master$PlayedLength_MID,na.rm = TRUE)*60
Diamond_avg_CS_MID_per_min <- mean(Diamond$CS_MID/Diamond$PlayedLength_MID,na.rm = TRUE)*60
Plat_avg_CS_MID_per_min <- mean(Plat$CS_MID/Plat$PlayedLength_MID,na.rm = TRUE)*60
Gold_avg_CS_MID_per_min <- mean(Gold$CS_MID/Gold$PlayedLength_MID,na.rm = TRUE)*60
Silver_avg_CS_MID_per_min <- mean(Silver$CS_MID/Silver$PlayedLength_MID,na.rm = TRUE)*60
Bronze_avg_CS_MID_per_min <- mean(Bronze$CS_MID/Bronze$PlayedLength_MID,na.rm = TRUE)*60
AvgTable_avg_CS_MID_per_min <- cbind(Challenger_avg_CS_MID_per_min,Master_avg_CS_MID_per_min,Diamond_avg_CS_MID_per_min,Plat_avg_CS_MID_per_min,Gold_avg_CS_MID_per_min,Silver_avg_CS_MID_per_min,Bronze_avg_CS_MID_per_min)
AvgTable_avg_CS_MID_per_min
```
MID Healing per min
```{r}
Challenger_avg_H_MID_per_min <- mean(Challenger$H_MID/Challenger$PlayedLength_MID,na.rm = TRUE)*60
Master_avg_H_MID_per_min <- mean(Master$H_MID/Master$PlayedLength_MID,na.rm = TRUE)*60
Diamond_avg_H_MID_per_min <- mean(Diamond$H_MID/Diamond$PlayedLength_MID,na.rm = TRUE)*60
Plat_avg_H_MID_per_min <- mean(Plat$H_MID/Plat$PlayedLength_MID,na.rm = TRUE)*60
Gold_avg_H_MID_per_min <- mean(Gold$H_MID/Gold$PlayedLength_MID,na.rm = TRUE)*60
Silver_avg_H_MID_per_min <- mean(Silver$H_MID/Silver$PlayedLength_MID,na.rm = TRUE)*60
Bronze_avg_H_MID_per_min <- mean(Bronze$H_MID/Bronze$PlayedLength_MID,na.rm = TRUE)*60
Avgtable_avg_H_MID_per_min <- cbind(Challenger_avg_H_MID_per_min,Master_avg_H_MID_per_min,Diamond_avg_H_MID_per_min,Plat_avg_H_MID_per_min,Gold_avg_H_MID_per_min,Silver_avg_H_MID_per_min,Bronze_avg_H_MID_per_min)
Avgtable_avg_H_MID_per_min
```
MID Gold per min
```{r}
Challenger_avg_G_MID_per_min <- mean(Challenger$G_MID/Challenger$PlayedLength_MID,na.rm = TRUE)*60
Master_avg_G_MID_per_min <- mean(Master$G_MID/Master$PlayedLength_MID,na.rm = TRUE)*60
Diamond_avg_G_MID_per_min <- mean(Diamond$G_MID/Diamond$PlayedLength_MID,na.rm = TRUE)*60
Plat_avg_G_MID_per_min <- mean(Plat$G_MID/Plat$PlayedLength_MID,na.rm = TRUE)*60
Gold_avg_G_MID_per_min <- mean(Gold$G_MID/Gold$PlayedLength_MID,na.rm = TRUE)*60
Silver_avg_G_MID_per_min <- mean(Silver$G_MID/Silver$PlayedLength_MID,na.rm = TRUE)*60
Bronze_avg_G_MID_per_min <- mean(Bronze$G_MID/Bronze$PlayedLength_MID,na.rm = TRUE)*60
Avgtable_avg_G_MID_per_min <- cbind(Challenger_avg_G_MID_per_min,Master_avg_G_MID_per_min,Diamond_avg_G_MID_per_min,Plat_avg_G_MID_per_min,Gold_avg_G_MID_per_min,Silver_avg_G_MID_per_min,Bronze_avg_G_MID_per_min)
Avgtable_avg_G_MID_per_min
```
MID Kill per min
```{r}
Challenger_avg_K_MID_per_min <- mean(Challenger$K_MID/Challenger$PlayedLength_MID,na.rm = TRUE)*60
Master_avg_K_MID_per_min <- mean(Master$K_MID/Master$PlayedLength_MID,na.rm = TRUE)*60
Diamond_avg_K_MID_per_min <- mean(Diamond$K_MID/Diamond$PlayedLength_MID,na.rm = TRUE)*60
Plat_avg_K_MID_per_min <- mean(Plat$K_MID/Plat$PlayedLength_MID,na.rm = TRUE)*60
Gold_avg_K_MID_per_min <- mean(Gold$K_MID/Gold$PlayedLength_MID,na.rm = TRUE)*60
Silver_avg_K_MID_per_min <- mean(Silver$K_MID/Silver$PlayedLength_MID,na.rm = TRUE)*60
Bronze_avg_K_MID_per_min <- mean(Bronze$K_MID/Bronze$PlayedLength_MID,na.rm = TRUE)*60
Avgtable_avg_K_MID_per_min <- cbind(Challenger_avg_K_MID_per_min,Master_avg_K_MID_per_min,Diamond_avg_K_MID_per_min,Plat_avg_K_MID_per_min,Gold_avg_K_MID_per_min,Silver_avg_K_MID_per_min,Bronze_avg_K_MID_per_min)
Avgtable_avg_K_MID_per_min
```
MID Death per min
```{r}
Challenger_avg_De_MID_per_min <- mean(Challenger$De_MID/Challenger$PlayedLength_MID,na.rm = TRUE)*60
Master_avg_De_MID_per_min <- mean(Master$De_MID/Master$PlayedLength_MID,na.rm = TRUE)*60
Diamond_avg_De_MID_per_min <- mean(Diamond$De_MID/Diamond$PlayedLength_MID,na.rm = TRUE)*60
Plat_avg_De_MID_per_min <- mean(Plat$De_MID/Plat$PlayedLength_MID,na.rm = TRUE)*60
Gold_avg_De_MID_per_min <- mean(Gold$De_MID/Gold$PlayedLength_MID,na.rm = TRUE)*60
Silver_avg_De_MID_per_min <- mean(Silver$De_MID/Silver$PlayedLength_MID,na.rm = TRUE)*60
Bronze_avg_De_MID_per_min <- mean(Bronze$De_MID/Bronze$PlayedLength_MID,na.rm = TRUE)*60
Avgtable_avg_De_MID_per_min <- cbind(Challenger_avg_De_MID_per_min,Master_avg_De_MID_per_min,Diamond_avg_De_MID_per_min,Plat_avg_De_MID_per_min,Gold_avg_De_MID_per_min,Silver_avg_De_MID_per_min,Bronze_avg_De_MID_per_min)
Avgtable_avg_De_MID_per_min
```
MID Assist per min
```{r}
Challenger_avg_A_MID_per_min <- mean(Challenger$A_MID/Challenger$PlayedLength_MID,na.rm = TRUE)*60
Master_avg_A_MID_per_min <- mean(Master$A_MID/Master$PlayedLength_MID,na.rm = TRUE)*60
Diamond_avg_A_MID_per_min <- mean(Diamond$A_MID/Diamond$PlayedLength_MID,na.rm = TRUE)*60
Plat_avg_A_MID_per_min <- mean(Plat$A_MID/Plat$PlayedLength_MID,na.rm = TRUE)*60
Gold_avg_A_MID_per_min <- mean(Gold$A_MID/Gold$PlayedLength_MID,na.rm = TRUE)*60
Silver_avg_A_MID_per_min <- mean(Silver$A_MID/Silver$PlayedLength_MID,na.rm = TRUE)*60
Bronze_avg_A_MID_per_min <- mean(Bronze$A_MID/Bronze$PlayedLength_MID,na.rm = TRUE)*60
Avgtable_avg_A_MID_per_min <- cbind(Challenger_avg_A_MID_per_min,Master_avg_A_MID_per_min,Diamond_avg_A_MID_per_min,Plat_avg_A_MID_per_min,Gold_avg_A_MID_per_min,Silver_avg_A_MID_per_min,Bronze_avg_A_MID_per_min)
Avgtable_avg_A_MID_per_min
```
MID Vision Ward per min
```{r}
Challenger_avg_VW_MID_per_min <- mean(Challenger$VW_MID/Challenger$PlayedLength_MID,na.rm = TRUE)*60
Master_avg_VW_MID_per_min <- mean(Master$VW_MID/Master$PlayedLength_MID,na.rm = TRUE)*60
Diamond_avg_VW_MID_per_min <- mean(Diamond$VW_MID/Diamond$PlayedLength_MID,na.rm = TRUE)*60
Plat_avg_VW_MID_per_min <- mean(Plat$VW_MID/Plat$PlayedLength_MID,na.rm = TRUE)*60
Gold_avg_VW_MID_per_min <- mean(Gold$VW_MID/Gold$PlayedLength_MID,na.rm = TRUE)*60
Silver_avg_VW_MID_per_min <- mean(Silver$VW_MID/Silver$PlayedLength_MID,na.rm = TRUE)*60
Bronze_avg_VW_MID_per_min <- mean(Bronze$VW_MID/Bronze$PlayedLength_MID,na.rm = TRUE)*60
Avgtable_avg_VW_MID_per_min <- cbind(Challenger_avg_VW_MID_per_min,Master_avg_VW_MID_per_min,Diamond_avg_VW_MID_per_min,Plat_avg_VW_MID_per_min,Gold_avg_VW_MID_per_min,Silver_avg_VW_MID_per_min,Bronze_avg_VW_MID_per_min)
Avgtable_avg_VW_MID_per_min
```
MID Wards Kill per min
```{r}
Challenger_avg_WK_MID_per_min <- mean(Challenger$WK_MID/Challenger$PlayedLength_MID,na.rm = TRUE)*60
Master_avg_WK_MID_per_min <- mean(Master$WK_MID/Master$PlayedLength_MID,na.rm = TRUE)*60
Diamond_avg_WK_MID_per_min <- mean(Diamond$WK_MID/Diamond$PlayedLength_MID,na.rm = TRUE)*60
Plat_avg_WK_MID_per_min <- mean(Plat$WK_MID/Plat$PlayedLength_MID,na.rm = TRUE)*60
Gold_avg_WK_MID_per_min <- mean(Gold$WK_MID/Gold$PlayedLength_MID,na.rm = TRUE)*60
Silver_avg_WK_MID_per_min <- mean(Silver$WK_MID/Silver$PlayedLength_MID,na.rm = TRUE)*60
Bronze_avg_WK_MID_per_min <- mean(Bronze$WK_MID/Bronze$PlayedLength_MID,na.rm = TRUE)*60
Avgtable_avg_WK_MID_per_min <- cbind(Challenger_avg_WK_MID_per_min,Master_avg_WK_MID_per_min,Diamond_avg_WK_MID_per_min,Plat_avg_WK_MID_per_min,Gold_avg_WK_MID_per_min,Silver_avg_WK_MID_per_min,Bronze_avg_WK_MID_per_min)
Avgtable_avg_WK_MID_per_min
```
MID Wards Placed per min
```{r}
Challenger_avg_WP_MID_per_min <- mean(Challenger$WP_MID/Challenger$PlayedLength_MID,na.rm = TRUE)*60
Master_avg_WP_MID_per_min <- mean(Master$WP_MID/Master$PlayedLength_MID,na.rm = TRUE)*60
Diamond_avg_WP_MID_per_min <- mean(Diamond$WP_MID/Diamond$PlayedLength_MID,na.rm = TRUE)*60
Plat_avg_WP_MID_per_min <- mean(Plat$WP_MID/Plat$PlayedLength_MID,na.rm = TRUE)*60
Gold_avg_WP_MID_per_min <- mean(Gold$WP_MID/Gold$PlayedLength_MID,na.rm = TRUE)*60
Silver_avg_WP_MID_per_min <- mean(Silver$WP_MID/Silver$PlayedLength_MID,na.rm = TRUE)*60
Bronze_avg_WP_MID_per_min <- mean(Bronze$WP_MID/Bronze$PlayedLength_MID,na.rm = TRUE)*60
Avgtable_avg_WP_MID_per_min <- cbind(Challenger_avg_WP_MID_per_min,Master_avg_WP_MID_per_min,Diamond_avg_WP_MID_per_min,Plat_avg_WP_MID_per_min,Gold_avg_WP_MID_per_min,Silver_avg_WP_MID_per_min,Bronze_avg_WP_MID_per_min)
Avgtable_avg_WP_MID_per_min
```
MID Kill Contribution
```{r}
Challenger_KC_MID <- mean(Challenger$KC_MID,na.rm = TRUE)
Master_KC_MID <- mean(Master$KC_MID,na.rm = TRUE)
Diamond_KC_MID <- mean(Diamond$KC_MID,na.rm = TRUE)
Plat_KC_MID <- mean(Plat$KC_MID,na.rm = TRUE)
Gold_KC_MID <- mean(Gold$KC_MID,na.rm = TRUE)
Silver_KC_MID <- mean(Silver$KC_MID,na.rm = TRUE)
Bronze_KC_MID <- mean(Bronze$KC_MID,na.rm = TRUE)
AvgTable_KC_MID <- cbind(Challenger_KC_MID,Master_KC_MID,Diamond_KC_MID,Plat_KC_MID,Gold_KC_MID,Silver_KC_MID,Bronze_KC_MID)
AvgTable_KC_MID
```
MID KDA
```{r}
Challenger_KDA_MID <- mean(Challenger$KDA_MID,na.rm = TRUE)
Master_KDA_MID <- mean(Master$KDA_MID,na.rm = TRUE)
Diamond_KDA_MID <- mean(Diamond$KDA_MID,na.rm = TRUE)
Plat_KDA_MID <- mean(Plat$KDA_MID,na.rm = TRUE)
Gold_KDA_MID <- mean(Gold$KDA_MID,na.rm = TRUE)
Silver_KDA_MID <- mean(Silver$KDA_MID,na.rm = TRUE)
Bronze_KDA_MID <- mean(Bronze$KDA_MID,na.rm = TRUE)
AvgTable_KDA_MID <- cbind(Challenger_KDA_MID,Master_KDA_MID,Diamond_KDA_MID,Plat_KDA_MID,Gold_KDA_MID,Silver_KDA_MID,Bronze_KDA_MID)
AvgTable_KDA_MID
```
MID WinRate
```{r}
Challenger_WinRate_MID <- mean(Challenger$WinRate_MID,na.rm = TRUE)
Master_WinRate_MID <- mean(Master$WinRate_MID,na.rm = TRUE)
Diamond_WinRate_MID <- mean(Diamond$WinRate_MID,na.rm = TRUE)
Plat_WinRate_MID <- mean(Plat$WinRate_MID,na.rm = TRUE)
Gold_WinRate_MID <- mean(Gold$WinRate_MID,na.rm = TRUE)
Silver_WinRate_MID <- mean(Silver$WinRate_MID,na.rm = TRUE)
Bronze_WinRate_MID <- mean(Bronze$WinRate_MID,na.rm = TRUE)
AvgTable_WinRate_MID <- cbind(Challenger_WinRate_MID,Master_WinRate_MID,Diamond_WinRate_MID,Plat_WinRate_MID,Gold_WinRate_MID,Silver_WinRate_MID,Bronze_WinRate_MID)
AvgTable_WinRate_MID
```
MID CC per min
```{r}
Challenger_avg_CC_MID_per_min <- mean(Challenger$CC_MID/Challenger$PlayedLength_MID,na.rm = TRUE)*60
Master_avg_CC_MID_per_min <- mean(Master$CC_MID/Master$PlayedLength_MID,na.rm = TRUE)*60
Diamond_avg_CC_MID_per_min <- mean(Diamond$CC_MID/Diamond$PlayedLength_MID,na.rm = TRUE)*60
Plat_avg_CC_MID_per_min <- mean(Plat$CC_MID/Plat$PlayedLength_MID,na.rm = TRUE)*60
Gold_avg_CC_MID_per_min <- mean(Gold$CC_MID/Gold$PlayedLength_MID,na.rm = TRUE)*60
Silver_avg_CC_MID_per_min <- mean(Silver$CC_MID/Silver$PlayedLength_MID,na.rm = TRUE)*60
Bronze_avg_CC_MID_per_min <- mean(Bronze$CC_MID/Bronze$PlayedLength_MID,na.rm = TRUE)*60
Avgtable_avg_CC_MID_per_min <- cbind(Challenger_avg_CC_MID_per_min,Master_avg_CC_MID_per_min,Diamond_avg_CC_MID_per_min,Plat_avg_CC_MID_per_min,Gold_avg_CC_MID_per_min,Silver_avg_CC_MID_per_min,Bronze_avg_CC_MID_per_min)
Avgtable_avg_CC_MID_per_min
```
MID FB Contribution
```{r}
Challenger_FBContribution_MID <- mean(Challenger$FBContribution_MID,na.rm = TRUE)
Master_FBContribution_MID <- mean(Master$FBContribution_MID,na.rm = TRUE)
Diamond_FBContribution_MID <- mean(Diamond$FBContribution_MID,na.rm = TRUE)
Plat_FBContribution_MID <- mean(Plat$FBContribution_MID,na.rm = TRUE)
Gold_FBContribution_MID <- mean(Gold$FBContribution_MID,na.rm = TRUE)
Silver_FBContribution_MID <- mean(Silver$FBContribution_MID,na.rm = TRUE)
Bronze_FBContribution_MID <- mean(Bronze$FBContribution_MID,na.rm = TRUE)
AvgTable_FBContribution_MID <- cbind(Challenger_FBContribution_MID,Master_FBContribution_MID,Diamond_FBContribution_MID,Plat_FBContribution_MID,Gold_FBContribution_MID,Silver_FBContribution_MID,Bronze_FBContribution_MID)
AvgTable_FBContribution_MID
```
MID Killing Sprees
```{r}
Challenger_KillSprees_MID <- mean(Challenger$KillSprees_MID,na.rm = TRUE)
Master_KillSprees_MID <- mean(Master$KillSprees_MID,na.rm = TRUE)
Diamond_KillSprees_MID <- mean(Diamond$KillSprees_MID,na.rm = TRUE)
Plat_KillSprees_MID <- mean(Plat$KillSprees_MID,na.rm = TRUE)
Gold_KillSprees_MID <- mean(Gold$KillSprees_MID,na.rm = TRUE)
Silver_KillSprees_MID <- mean(Silver$KillSprees_MID,na.rm = TRUE)
Bronze_KillSprees_MID <- mean(Bronze$KillSprees_MID,na.rm = TRUE)
AvgTable_KillSprees_MID <- cbind(Challenger_KillSprees_MID,Master_KillSprees_MID,Diamond_KillSprees_MID,Plat_KillSprees_MID,Gold_KillSprees_MID,Silver_KillSprees_MID,Bronze_KillSprees_MID)
AvgTable_KillSprees_MID
```
MID Largest Killing Sprees
```{r}
Challenger_LargestKillingSpree_MID <- mean(Challenger$LargestKillingSpree_MID,na.rm = TRUE)
Master_LargestKillingSpree_MID <- mean(Master$LargestKillingSpree_MID,na.rm = TRUE)
Diamond_LargestKillingSpree_MID <- mean(Diamond$LargestKillingSpree_MID,na.rm = TRUE)
Plat_LargestKillingSpree_MID <- mean(Plat$LargestKillingSpree_MID,na.rm = TRUE)
Gold_LargestKillingSpree_MID <- mean(Gold$LargestKillingSpree_MID,na.rm = TRUE)
Silver_LargestKillingSpree_MID <- mean(Silver$LargestKillingSpree_MID,na.rm = TRUE)
Bronze_LargestKillingSpree_MID <- mean(Bronze$LargestKillingSpree_MID,na.rm = TRUE)
AvgTable_LargestKillingSpree_MID <- cbind(Challenger_LargestKillingSpree_MID,Master_LargestKillingSpree_MID,Diamond_LargestKillingSpree_MID,Plat_LargestKillingSpree_MID,Gold_LargestKillingSpree_MID,Silver_LargestKillingSpree_MID,Bronze_LargestKillingSpree_MID)
AvgTable_LargestKillingSpree_MID
```
MID CS Difference per min 0-10 min
```{r}
Challenger_avg_CSDiffPerMin_zeroToTen_MID_per_min <- mean(Challenger$CSDiffPerMin_zeroToTen_MID/Challenger$PlayedLength_MID,na.rm = TRUE)*60
Master_avg_CSDiffPerMin_zeroToTen_MID_per_min <- mean(Master$CSDiffPerMin_zeroToTen_MID/Master$PlayedLength_MID,na.rm = TRUE)*60
Diamond_avg_CSDiffPerMin_zeroToTen_MID_per_min <- mean(Diamond$CSDiffPerMin_zeroToTen_MID/Diamond$PlayedLength_MID,na.rm = TRUE)*60
Plat_avg_CSDiffPerMin_zeroToTen_MID_per_min <- mean(Plat$CSDiffPerMin_zeroToTen_MID/Plat$PlayedLength_MID,na.rm = TRUE)*60
Gold_avg_CSDiffPerMin_zeroToTen_MID_per_min <- mean(Gold$CSDiffPerMin_zeroToTen_MID/Gold$PlayedLength_MID,na.rm = TRUE)*60
Silver_avg_CSDiffPerMin_zeroToTen_MID_per_min <- mean(Silver$CSDiffPerMin_zeroToTen_MID/Silver$PlayedLength_MID,na.rm = TRUE)*60
Bronze_avg_CSDiffPerMin_zeroToTen_MID_per_min <- mean(Bronze$CSDiffPerMin_zeroToTen_MID/Bronze$PlayedLength_MID,na.rm = TRUE)*60
Avgtable_avg_CSDiffPerMin_zeroToTen_MID_per_min <- cbind(Challenger_avg_CSDiffPerMin_zeroToTen_MID_per_min,Master_avg_CSDiffPerMin_zeroToTen_MID_per_min,Diamond_avg_CSDiffPerMin_zeroToTen_MID_per_min,Plat_avg_CSDiffPerMin_zeroToTen_MID_per_min,Gold_avg_CSDiffPerMin_zeroToTen_MID_per_min,Silver_avg_CSDiffPerMin_zeroToTen_MID_per_min,Bronze_avg_CSDiffPerMin_zeroToTen_MID_per_min)
Avgtable_avg_CSDiffPerMin_zeroToTen_MID_per_min
```
MID XP per min 0-10 min
```{r}
Challenger_avg_XPPerMin_zeroToTen_MID_per_min <- mean(Challenger$XPPerMin_zeroToTen_MID/Challenger$PlayedLength_MID,na.rm = TRUE)*60
Master_avg_XPPerMin_zeroToTen_MID_per_min <- mean(Master$XPPerMin_zeroToTen_MID/Master$PlayedLength_MID,na.rm = TRUE)*60
Diamond_avg_XPPerMin_zeroToTen_MID_per_min <- mean(Diamond$XPPerMin_zeroToTen_MID/Diamond$PlayedLength_MID,na.rm = TRUE)*60
Plat_avg_XPPerMin_zeroToTen_MID_per_min <- mean(Plat$XPPerMin_zeroToTen_MID/Plat$PlayedLength_MID,na.rm = TRUE)*60
Gold_avg_XPPerMin_zeroToTen_MID_per_min <- mean(Gold$XPPerMin_zeroToTen_MID/Gold$PlayedLength_MID,na.rm = TRUE)*60
Silver_avg_XPPerMin_zeroToTen_MID_per_min <- mean(Silver$XPPerMin_zeroToTen_MID/Silver$PlayedLength_MID,na.rm = TRUE)*60
Bronze_avg_XPPerMin_zeroToTen_MID_per_min <- mean(Bronze$XPPerMin_zeroToTen_MID/Bronze$PlayedLength_MID,na.rm = TRUE)*60
Avgtable_avg_XPPerMin_zeroToTen_MID_per_min <- cbind(Challenger_avg_XPPerMin_zeroToTen_MID_per_min,Master_avg_XPPerMin_zeroToTen_MID_per_min,Diamond_avg_XPPerMin_zeroToTen_MID_per_min,Plat_avg_XPPerMin_zeroToTen_MID_per_min,Gold_avg_XPPerMin_zeroToTen_MID_per_min,Silver_avg_XPPerMin_zeroToTen_MID_per_min,Bronze_avg_XPPerMin_zeroToTen_MID_per_min)
Avgtable_avg_XPPerMin_zeroToTen_MID_per_min
```
MID XP per min 0-30 min
```{r}
Challenger_avg_XPPerMin_zeroToThirty_MID_per_min <- mean(Challenger$XPPerMin_zeroToThirty_MID/Challenger$PlayedLength_MID,na.rm = TRUE)*60
Master_avg_XPPerMin_zeroToThirty_MID_per_min <- mean(Master$XPPerMin_zeroToThirty_MID/Master$PlayedLength_MID,na.rm = TRUE)*60
Diamond_avg_XPPerMin_zeroToThirty_MID_per_min <- mean(Diamond$XPPerMin_zeroToThirty_MID/Diamond$PlayedLength_MID,na.rm = TRUE)*60
Plat_avg_XPPerMin_zeroToThirty_MID_per_min <- mean(Plat$XPPerMin_zeroToThirty_MID/Plat$PlayedLength_MID,na.rm = TRUE)*60
Gold_avg_XPPerMin_zeroToThirty_MID_per_min <- mean(Gold$XPPerMin_zeroToThirty_MID/Gold$PlayedLength_MID,na.rm = TRUE)*60
Silver_avg_XPPerMin_zeroToThirty_MID_per_min <- mean(Silver$XPPerMin_zeroToThirty_MID/Silver$PlayedLength_MID,na.rm = TRUE)*60
Bronze_avg_XPPerMin_zeroToThirty_MID_per_min <- mean(Bronze$XPPerMin_zeroToThirty_MID/Bronze$PlayedLength_MID,na.rm = TRUE)*60
Avgtable_avg_XPPerMin_zeroToThirty_MID_per_min <- cbind(Challenger_avg_XPPerMin_zeroToThirty_MID_per_min,Master_avg_XPPerMin_zeroToThirty_MID_per_min,Diamond_avg_XPPerMin_zeroToThirty_MID_per_min,Plat_avg_XPPerMin_zeroToThirty_MID_per_min,Gold_avg_XPPerMin_zeroToThirty_MID_per_min,Silver_avg_XPPerMin_zeroToThirty_MID_per_min,Bronze_avg_XPPerMin_zeroToThirty_MID_per_min)
Avgtable_avg_XPPerMin_zeroToThirty_MID_per_min
```
MID XP Difference per min 0-10
```{r}
Challenger_avg_XPDiffPerMin_zeroToTen_MID_per_min <- mean(Challenger$XPDiffPerMin_zeroToTen_MID/Challenger$PlayedLength_MID,na.rm = TRUE)*60
Master_avg_XPDiffPerMin_zeroToTen_MID_per_min <- mean(Master$XPDiffPerMin_zeroToTen_MID/Master$PlayedLength_MID,na.rm = TRUE)*60
Diamond_avg_XPDiffPerMin_zeroToTen_MID_per_min <- mean(Diamond$XPDiffPerMin_zeroToTen_MID/Diamond$PlayedLength_MID,na.rm = TRUE)*60
Plat_avg_XPDiffPerMin_zeroToTen_MID_per_min <- mean(Plat$XPDiffPerMin_zeroToTen_MID/Plat$PlayedLength_MID,na.rm = TRUE)*60
Gold_avg_XPDiffPerMin_zeroToTen_MID_per_min <- mean(Gold$XPDiffPerMin_zeroToTen_MID/Gold$PlayedLength_MID,na.rm = TRUE)*60
Silver_avg_XPDiffPerMin_zeroToTen_MID_per_min <- mean(Silver$XPDiffPerMin_zeroToTen_MID/Silver$PlayedLength_MID,na.rm = TRUE)*60
Bronze_avg_XPDiffPerMin_zeroToTen_MID_per_min <- mean(Bronze$XPDiffPerMin_zeroToTen_MID/Bronze$PlayedLength_MID,na.rm = TRUE)*60
Avgtable_avg_XPDiffPerMin_zeroToTen_MID_per_min <- cbind(Challenger_avg_XPDiffPerMin_zeroToTen_MID_per_min,Master_avg_XPDiffPerMin_zeroToTen_MID_per_min,Diamond_avg_XPDiffPerMin_zeroToTen_MID_per_min,Plat_avg_XPDiffPerMin_zeroToTen_MID_per_min,Gold_avg_XPDiffPerMin_zeroToTen_MID_per_min,Silver_avg_XPDiffPerMin_zeroToTen_MID_per_min,Bronze_avg_XPDiffPerMin_zeroToTen_MID_per_min)
Avgtable_avg_XPDiffPerMin_zeroToTen_MID_per_min
```
MID XP Difference per min 10-20
```{r}
Challenger_avg_XPDiffPerMin_tenToTwenty_MID_per_min <- mean(Challenger$XPDiffPerMin_tenToTwenty_MID/Challenger$PlayedLength_MID,na.rm = TRUE)*60
Master_avg_XPDiffPerMin_tenToTwenty_MID_per_min <- mean(Master$XPDiffPerMin_tenToTwenty_MID/Master$PlayedLength_MID,na.rm = TRUE)*60
Diamond_avg_XPDiffPerMin_tenToTwenty_MID_per_min <- mean(Diamond$XPDiffPerMin_tenToTwenty_MID/Diamond$PlayedLength_MID,na.rm = TRUE)*60
Plat_avg_XPDiffPerMin_tenToTwenty_MID_per_min <- mean(Plat$XPDiffPerMin_tenToTwenty_MID/Plat$PlayedLength_MID,na.rm = TRUE)*60
Gold_avg_XPDiffPerMin_tenToTwenty_MID_per_min <- mean(Gold$XPDiffPerMin_tenToTwenty_MID/Gold$PlayedLength_MID,na.rm = TRUE)*60
Silver_avg_XPDiffPerMin_tenToTwenty_MID_per_min <- mean(Silver$XPDiffPerMin_tenToTwenty_MID/Silver$PlayedLength_MID,na.rm = TRUE)*60
Bronze_avg_XPDiffPerMin_tenToTwenty_MID_per_min <- mean(Bronze$XPDiffPerMin_tenToTwenty_MID/Bronze$PlayedLength_MID,na.rm = TRUE)*60
Avgtable_avg_XPDiffPerMin_tenToTwenty_MID_per_min <- cbind(Challenger_avg_XPDiffPerMin_tenToTwenty_MID_per_min,Master_avg_XPDiffPerMin_tenToTwenty_MID_per_min,Diamond_avg_XPDiffPerMin_tenToTwenty_MID_per_min,Plat_avg_XPDiffPerMin_tenToTwenty_MID_per_min,Gold_avg_XPDiffPerMin_tenToTwenty_MID_per_min,Silver_avg_XPDiffPerMin_tenToTwenty_MID_per_min,Bronze_avg_XPDiffPerMin_tenToTwenty_MID_per_min)
Avgtable_avg_XPDiffPerMin_tenToTwenty_MID_per_min
```
MID XP Difference per min 20-30
```{r}
Challenger_avg_XPDiffPerMin_twentyToThirty_MID_per_min <- mean(Challenger$XPDiffPerMin_twentyToThirty_MID/Challenger$PlayedLength_MID,na.rm = TRUE)*60
Master_avg_XPDiffPerMin_twentyToThirty_MID_per_min <- mean(Master$XPDiffPerMin_twentyToThirty_MID/Master$PlayedLength_MID,na.rm = TRUE)*60
Diamond_avg_XPDiffPerMin_twentyToThirty_MID_per_min <- mean(Diamond$XPDiffPerMin_twentyToThirty_MID/Diamond$PlayedLength_MID,na.rm = TRUE)*60
Plat_avg_XPDiffPerMin_twentyToThirty_MID_per_min <- mean(Plat$XPDiffPerMin_twentyToThirty_MID/Plat$PlayedLength_MID,na.rm = TRUE)*60
Gold_avg_XPDiffPerMin_twentyToThirty_MID_per_min <- mean(Gold$XPDiffPerMin_twentyToThirty_MID/Gold$PlayedLength_MID,na.rm = TRUE)*60
Silver_avg_XPDiffPerMin_twentyToThirty_MID_per_min <- mean(Silver$XPDiffPerMin_twentyToThirty_MID/Silver$PlayedLength_MID,na.rm = TRUE)*60
Bronze_avg_XPDiffPerMin_twentyToThirty_MID_per_min <- mean(Bronze$XPDiffPerMin_twentyToThirty_MID/Bronze$PlayedLength_MID,na.rm = TRUE)*60
Avgtable_avg_XPDiffPerMin_twentyToThirty_MID_per_min <- cbind(Challenger_avg_XPDiffPerMin_twentyToThirty_MID_per_min,Master_avg_XPDiffPerMin_twentyToThirty_MID_per_min,Diamond_avg_XPDiffPerMin_twentyToThirty_MID_per_min,Plat_avg_XPDiffPerMin_twentyToThirty_MID_per_min,Gold_avg_XPDiffPerMin_twentyToThirty_MID_per_min,Silver_avg_XPDiffPerMin_twentyToThirty_MID_per_min,Bronze_avg_XPDiffPerMin_twentyToThirty_MID_per_min)
Avgtable_avg_XPDiffPerMin_twentyToThirty_MID_per_min
```
MID Team Gold Percentage
```{r}
Challenger_TeamGoldPercent_MID <- mean(Challenger$TeamGoldPercent_MID,na.rm = TRUE)
Master_TeamGoldPercent_MID <- mean(Master$TeamGoldPercent_MID,na.rm = TRUE)
Diamond_TeamGoldPercent_MID <- mean(Diamond$TeamGoldPercent_MID,na.rm = TRUE)
Plat_TeamGoldPercent_MID <- mean(Plat$TeamGoldPercent_MID,na.rm = TRUE)
Gold_TeamGoldPercent_MID <- mean(Gold$TeamGoldPercent_MID,na.rm = TRUE)
Silver_TeamGoldPercent_MID <- mean(Silver$TeamGoldPercent_MID,na.rm = TRUE)
Bronze_TeamGoldPercent_MID <- mean(Bronze$TeamGoldPercent_MID,na.rm = TRUE)
AvgTable_TeamGoldPercent_MID <- cbind(Challenger_TeamGoldPercent_MID,Master_TeamGoldPercent_MID,Diamond_TeamGoldPercent_MID,Plat_TeamGoldPercent_MID,Gold_TeamGoldPercent_MID,Silver_TeamGoldPercent_MID,Bronze_TeamGoldPercent_MID)
AvgTable_TeamGoldPercent_MID
```
MID Team Damage Percentage
```{r}
Challenger_TeamDamagePercent_MID <- mean(Challenger$TeamDamagePercent_MID,na.rm = TRUE)
Master_TeamDamagePercent_MID <- mean(Master$TeamDamagePercent_MID,na.rm = TRUE)
Diamond_TeamDamagePercent_MID <- mean(Diamond$TeamDamagePercent_MID,na.rm = TRUE)
Plat_TeamDamagePercent_MID <- mean(Plat$TeamDamagePercent_MID,na.rm = TRUE)
Gold_TeamDamagePercent_MID <- mean(Gold$TeamDamagePercent_MID,na.rm = TRUE)
Silver_TeamDamagePercent_MID <- mean(Silver$TeamDamagePercent_MID,na.rm = TRUE)
Bronze_TeamDamagePercent_MID <- mean(Bronze$TeamDamagePercent_MID,na.rm = TRUE)
AvgTable_TeamDamagePercent_MID <- cbind(Challenger_TeamDamagePercent_MID,Master_TeamDamagePercent_MID,Diamond_TeamDamagePercent_MID,Plat_TeamDamagePercent_MID,Gold_TeamDamagePercent_MID,Silver_TeamDamagePercent_MID,Bronze_TeamDamagePercent_MID)
AvgTable_TeamDamagePercent_MID
```



# TOP
TOP Damage Dealt per minute
```{r}
Challenger_avg_D_TOP_per_min <- mean(Challenger$D_TOP/Challenger$PlayedLength_TOP,na.rm = TRUE)*60
Master_avg_D_TOP_per_min <- mean(Master$D_TOP/Master$PlayedLength_TOP,na.rm = TRUE)*60
Diamond_avg_D_TOP_per_min <- mean(Diamond$D_TOP/Diamond$PlayedLength_TOP,na.rm = TRUE)*60
Plat_avg_D_TOP_per_min <- mean(Plat$D_TOP/Plat$PlayedLength_TOP,na.rm = TRUE)*60
Gold_avg_D_TOP_per_min <- mean(Gold$D_TOP/Gold$PlayedLength_TOP,na.rm = TRUE)*60
Silver_avg_D_TOP_per_min <- mean(Silver$D_TOP/Silver$PlayedLength_TOP,na.rm = TRUE)*60
Bronze_avg_D_TOP_per_min <- mean(Bronze$D_TOP/Bronze$PlayedLength_TOP,na.rm = TRUE)*60
Avgtable_avg_D_TOP_per_min <- cbind(Challenger_avg_D_TOP_per_min,Master_avg_D_TOP_per_min,Diamond_avg_D_TOP_per_min,Plat_avg_D_TOP_per_min,Gold_avg_D_TOP_per_min,Silver_avg_D_TOP_per_min,Bronze_avg_D_TOP_per_min)
Avgtable_avg_D_TOP_per_min
```
TOP Damagen Taken per min
```{r}
Challenger_avg_DT_TOP_per_min <- mean(Challenger$DT_TOP/Challenger$PlayedLength_TOP,na.rm = TRUE)*60
Master_avg_DT_TOP_per_min <- mean(Master$DT_TOP/Master$PlayedLength_TOP,na.rm = TRUE)*60
Diamond_avg_DT_TOP_per_min <- mean(Diamond$DT_TOP/Diamond$PlayedLength_TOP,na.rm = TRUE)*60
Plat_avg_DT_TOP_per_min <- mean(Plat$DT_TOP/Plat$PlayedLength_TOP,na.rm = TRUE)*60
Gold_avg_DT_TOP_per_min <- mean(Gold$DT_TOP/Gold$PlayedLength_TOP,na.rm = TRUE)*60
Silver_avg_DT_TOP_per_min <- mean(Silver$DT_TOP/Silver$PlayedLength_TOP,na.rm = TRUE)*60
Bronze_avg_DT_TOP_per_min <- mean(Bronze$DT_TOP/Bronze$PlayedLength_TOP,na.rm = TRUE)*60
Avgtable_avg_DT_TOP_per_min <- cbind(Challenger_avg_DT_TOP_per_min,Master_avg_DT_TOP_per_min,Diamond_avg_DT_TOP_per_min,Plat_avg_DT_TOP_per_min,Gold_avg_DT_TOP_per_min,Silver_avg_DT_TOP_per_min,Bronze_avg_DT_TOP_per_min)
Avgtable_avg_DT_TOP_per_min
```
TOP CS in first 10 mins
```{r}
Challenger_CS_zeroToTen_TOP <- mean(Challenger$CS_zeroToTen_TOP,na.rm = TRUE)
Master_CS_zeroToTen_TOP <- mean(Master$CS_zeroToTen_TOP,na.rm = TRUE)
Diamond_CS_zeroToTen_TOP <- mean(Diamond$CS_zeroToTen_TOP,na.rm = TRUE)
Plat_CS_zeroToTen_TOP <- mean(Plat$CS_zeroToTen_TOP,na.rm = TRUE)
Gold_CS_zeroToTen_TOP <- mean(Gold$CS_zeroToTen_TOP,na.rm = TRUE)
Silver_CS_zeroToTen_TOP <- mean(Silver$CS_zeroToTen_TOP,na.rm = TRUE)
Bronze_CS_zeroToTen_TOP <- mean(Bronze$CS_zeroToTen_TOP,na.rm = TRUE)
AvgTable_CS_zeroToTen_TOP <- cbind(Challenger_CS_zeroToTen_TOP,Master_CS_zeroToTen_TOP,Diamond_CS_zeroToTen_TOP,Plat_CS_zeroToTen_TOP,Gold_CS_zeroToTen_TOP,Silver_CS_zeroToTen_TOP,Bronze_CS_zeroToTen_TOP)
AvgTable_CS_zeroToTen_TOP
```
TOP CS per min
```{r}
Challenger_avg_CS_TOP_per_min <- mean(Challenger$CS_TOP/Challenger$PlayedLength_TOP,na.rm = TRUE)*60
Master_avg_CS_TOP_per_min <- mean(Master$CS_TOP/Master$PlayedLength_TOP,na.rm = TRUE)*60
Diamond_avg_CS_TOP_per_min <- mean(Diamond$CS_TOP/Diamond$PlayedLength_TOP,na.rm = TRUE)*60
Plat_avg_CS_TOP_per_min <- mean(Plat$CS_TOP/Plat$PlayedLength_TOP,na.rm = TRUE)*60
Gold_avg_CS_TOP_per_min <- mean(Gold$CS_TOP/Gold$PlayedLength_TOP,na.rm = TRUE)*60
Silver_avg_CS_TOP_per_min <- mean(Silver$CS_TOP/Silver$PlayedLength_TOP,na.rm = TRUE)*60
Bronze_avg_CS_TOP_per_min <- mean(Bronze$CS_TOP/Bronze$PlayedLength_TOP,na.rm = TRUE)*60
AvgTable_avg_CS_TOP_per_min <- cbind(Challenger_avg_CS_TOP_per_min,Master_avg_CS_TOP_per_min,Diamond_avg_CS_TOP_per_min,Plat_avg_CS_TOP_per_min,Gold_avg_CS_TOP_per_min,Silver_avg_CS_TOP_per_min,Bronze_avg_CS_TOP_per_min)
AvgTable_avg_CS_TOP_per_min
```
TOP Healing per min
```{r}
Challenger_avg_H_TOP_per_min <- mean(Challenger$H_TOP/Challenger$PlayedLength_TOP,na.rm = TRUE)*60
Master_avg_H_TOP_per_min <- mean(Master$H_TOP/Master$PlayedLength_TOP,na.rm = TRUE)*60
Diamond_avg_H_TOP_per_min <- mean(Diamond$H_TOP/Diamond$PlayedLength_TOP,na.rm = TRUE)*60
Plat_avg_H_TOP_per_min <- mean(Plat$H_TOP/Plat$PlayedLength_TOP,na.rm = TRUE)*60
Gold_avg_H_TOP_per_min <- mean(Gold$H_TOP/Gold$PlayedLength_TOP,na.rm = TRUE)*60
Silver_avg_H_TOP_per_min <- mean(Silver$H_TOP/Silver$PlayedLength_TOP,na.rm = TRUE)*60
Bronze_avg_H_TOP_per_min <- mean(Bronze$H_TOP/Bronze$PlayedLength_TOP,na.rm = TRUE)*60
Avgtable_avg_H_TOP_per_min <- cbind(Challenger_avg_H_TOP_per_min,Master_avg_H_TOP_per_min,Diamond_avg_H_TOP_per_min,Plat_avg_H_TOP_per_min,Gold_avg_H_TOP_per_min,Silver_avg_H_TOP_per_min,Bronze_avg_H_TOP_per_min)
Avgtable_avg_H_TOP_per_min
```
TOP Gold per min
```{r}
Challenger_avg_G_TOP_per_min <- mean(Challenger$G_TOP/Challenger$PlayedLength_TOP,na.rm = TRUE)*60
Master_avg_G_TOP_per_min <- mean(Master$G_TOP/Master$PlayedLength_TOP,na.rm = TRUE)*60
Diamond_avg_G_TOP_per_min <- mean(Diamond$G_TOP/Diamond$PlayedLength_TOP,na.rm = TRUE)*60
Plat_avg_G_TOP_per_min <- mean(Plat$G_TOP/Plat$PlayedLength_TOP,na.rm = TRUE)*60
Gold_avg_G_TOP_per_min <- mean(Gold$G_TOP/Gold$PlayedLength_TOP,na.rm = TRUE)*60
Silver_avg_G_TOP_per_min <- mean(Silver$G_TOP/Silver$PlayedLength_TOP,na.rm = TRUE)*60
Bronze_avg_G_TOP_per_min <- mean(Bronze$G_TOP/Bronze$PlayedLength_TOP,na.rm = TRUE)*60
Avgtable_avg_G_TOP_per_min <- cbind(Challenger_avg_G_TOP_per_min,Master_avg_G_TOP_per_min,Diamond_avg_G_TOP_per_min,Plat_avg_G_TOP_per_min,Gold_avg_G_TOP_per_min,Silver_avg_G_TOP_per_min,Bronze_avg_G_TOP_per_min)
Avgtable_avg_G_TOP_per_min
```
TOP Kill per min
```{r}
Challenger_avg_K_TOP_per_min <- mean(Challenger$K_TOP/Challenger$PlayedLength_TOP,na.rm = TRUE)*60
Master_avg_K_TOP_per_min <- mean(Master$K_TOP/Master$PlayedLength_TOP,na.rm = TRUE)*60
Diamond_avg_K_TOP_per_min <- mean(Diamond$K_TOP/Diamond$PlayedLength_TOP,na.rm = TRUE)*60
Plat_avg_K_TOP_per_min <- mean(Plat$K_TOP/Plat$PlayedLength_TOP,na.rm = TRUE)*60
Gold_avg_K_TOP_per_min <- mean(Gold$K_TOP/Gold$PlayedLength_TOP,na.rm = TRUE)*60
Silver_avg_K_TOP_per_min <- mean(Silver$K_TOP/Silver$PlayedLength_TOP,na.rm = TRUE)*60
Bronze_avg_K_TOP_per_min <- mean(Bronze$K_TOP/Bronze$PlayedLength_TOP,na.rm = TRUE)*60
Avgtable_avg_K_TOP_per_min <- cbind(Challenger_avg_K_TOP_per_min,Master_avg_K_TOP_per_min,Diamond_avg_K_TOP_per_min,Plat_avg_K_TOP_per_min,Gold_avg_K_TOP_per_min,Silver_avg_K_TOP_per_min,Bronze_avg_K_TOP_per_min)
Avgtable_avg_K_TOP_per_min
```
TOP Death per min
```{r}
Challenger_avg_De_TOP_per_min <- mean(Challenger$De_TOP/Challenger$PlayedLength_TOP,na.rm = TRUE)*60
Master_avg_De_TOP_per_min <- mean(Master$De_TOP/Master$PlayedLength_TOP,na.rm = TRUE)*60
Diamond_avg_De_TOP_per_min <- mean(Diamond$De_TOP/Diamond$PlayedLength_TOP,na.rm = TRUE)*60
Plat_avg_De_TOP_per_min <- mean(Plat$De_TOP/Plat$PlayedLength_TOP,na.rm = TRUE)*60
Gold_avg_De_TOP_per_min <- mean(Gold$De_TOP/Gold$PlayedLength_TOP,na.rm = TRUE)*60
Silver_avg_De_TOP_per_min <- mean(Silver$De_TOP/Silver$PlayedLength_TOP,na.rm = TRUE)*60
Bronze_avg_De_TOP_per_min <- mean(Bronze$De_TOP/Bronze$PlayedLength_TOP,na.rm = TRUE)*60
Avgtable_avg_De_TOP_per_min <- cbind(Challenger_avg_De_TOP_per_min,Master_avg_De_TOP_per_min,Diamond_avg_De_TOP_per_min,Plat_avg_De_TOP_per_min,Gold_avg_De_TOP_per_min,Silver_avg_De_TOP_per_min,Bronze_avg_De_TOP_per_min)
Avgtable_avg_De_TOP_per_min
```
TOP Assist per min
```{r}
Challenger_avg_A_TOP_per_min <- mean(Challenger$A_TOP/Challenger$PlayedLength_TOP,na.rm = TRUE)*60
Master_avg_A_TOP_per_min <- mean(Master$A_TOP/Master$PlayedLength_TOP,na.rm = TRUE)*60
Diamond_avg_A_TOP_per_min <- mean(Diamond$A_TOP/Diamond$PlayedLength_TOP,na.rm = TRUE)*60
Plat_avg_A_TOP_per_min <- mean(Plat$A_TOP/Plat$PlayedLength_TOP,na.rm = TRUE)*60
Gold_avg_A_TOP_per_min <- mean(Gold$A_TOP/Gold$PlayedLength_TOP,na.rm = TRUE)*60
Silver_avg_A_TOP_per_min <- mean(Silver$A_TOP/Silver$PlayedLength_TOP,na.rm = TRUE)*60
Bronze_avg_A_TOP_per_min <- mean(Bronze$A_TOP/Bronze$PlayedLength_TOP,na.rm = TRUE)*60
Avgtable_avg_A_TOP_per_min <- cbind(Challenger_avg_A_TOP_per_min,Master_avg_A_TOP_per_min,Diamond_avg_A_TOP_per_min,Plat_avg_A_TOP_per_min,Gold_avg_A_TOP_per_min,Silver_avg_A_TOP_per_min,Bronze_avg_A_TOP_per_min)
Avgtable_avg_A_TOP_per_min
```
TOP Vision Ward per min
```{r}
Challenger_avg_VW_TOP_per_min <- mean(Challenger$VW_TOP/Challenger$PlayedLength_TOP,na.rm = TRUE)*60
Master_avg_VW_TOP_per_min <- mean(Master$VW_TOP/Master$PlayedLength_TOP,na.rm = TRUE)*60
Diamond_avg_VW_TOP_per_min <- mean(Diamond$VW_TOP/Diamond$PlayedLength_TOP,na.rm = TRUE)*60
Plat_avg_VW_TOP_per_min <- mean(Plat$VW_TOP/Plat$PlayedLength_TOP,na.rm = TRUE)*60
Gold_avg_VW_TOP_per_min <- mean(Gold$VW_TOP/Gold$PlayedLength_TOP,na.rm = TRUE)*60
Silver_avg_VW_TOP_per_min <- mean(Silver$VW_TOP/Silver$PlayedLength_TOP,na.rm = TRUE)*60
Bronze_avg_VW_TOP_per_min <- mean(Bronze$VW_TOP/Bronze$PlayedLength_TOP,na.rm = TRUE)*60
Avgtable_avg_VW_TOP_per_min <- cbind(Challenger_avg_VW_TOP_per_min,Master_avg_VW_TOP_per_min,Diamond_avg_VW_TOP_per_min,Plat_avg_VW_TOP_per_min,Gold_avg_VW_TOP_per_min,Silver_avg_VW_TOP_per_min,Bronze_avg_VW_TOP_per_min)
Avgtable_avg_VW_TOP_per_min
```
TOP Wards Kill per min
```{r}
Challenger_avg_WK_TOP_per_min <- mean(Challenger$WK_TOP/Challenger$PlayedLength_TOP,na.rm = TRUE)*60
Master_avg_WK_TOP_per_min <- mean(Master$WK_TOP/Master$PlayedLength_TOP,na.rm = TRUE)*60
Diamond_avg_WK_TOP_per_min <- mean(Diamond$WK_TOP/Diamond$PlayedLength_TOP,na.rm = TRUE)*60
Plat_avg_WK_TOP_per_min <- mean(Plat$WK_TOP/Plat$PlayedLength_TOP,na.rm = TRUE)*60
Gold_avg_WK_TOP_per_min <- mean(Gold$WK_TOP/Gold$PlayedLength_TOP,na.rm = TRUE)*60
Silver_avg_WK_TOP_per_min <- mean(Silver$WK_TOP/Silver$PlayedLength_TOP,na.rm = TRUE)*60
Bronze_avg_WK_TOP_per_min <- mean(Bronze$WK_TOP/Bronze$PlayedLength_TOP,na.rm = TRUE)*60
Avgtable_avg_WK_TOP_per_min <- cbind(Challenger_avg_WK_TOP_per_min,Master_avg_WK_TOP_per_min,Diamond_avg_WK_TOP_per_min,Plat_avg_WK_TOP_per_min,Gold_avg_WK_TOP_per_min,Silver_avg_WK_TOP_per_min,Bronze_avg_WK_TOP_per_min)
Avgtable_avg_WK_TOP_per_min
```
TOP Wards Placed per min
```{r}
Challenger_avg_WP_TOP_per_min <- mean(Challenger$WP_TOP/Challenger$PlayedLength_TOP,na.rm = TRUE)*60
Master_avg_WP_TOP_per_min <- mean(Master$WP_TOP/Master$PlayedLength_TOP,na.rm = TRUE)*60
Diamond_avg_WP_TOP_per_min <- mean(Diamond$WP_TOP/Diamond$PlayedLength_TOP,na.rm = TRUE)*60
Plat_avg_WP_TOP_per_min <- mean(Plat$WP_TOP/Plat$PlayedLength_TOP,na.rm = TRUE)*60
Gold_avg_WP_TOP_per_min <- mean(Gold$WP_TOP/Gold$PlayedLength_TOP,na.rm = TRUE)*60
Silver_avg_WP_TOP_per_min <- mean(Silver$WP_TOP/Silver$PlayedLength_TOP,na.rm = TRUE)*60
Bronze_avg_WP_TOP_per_min <- mean(Bronze$WP_TOP/Bronze$PlayedLength_TOP,na.rm = TRUE)*60
Avgtable_avg_WP_TOP_per_min <- cbind(Challenger_avg_WP_TOP_per_min,Master_avg_WP_TOP_per_min,Diamond_avg_WP_TOP_per_min,Plat_avg_WP_TOP_per_min,Gold_avg_WP_TOP_per_min,Silver_avg_WP_TOP_per_min,Bronze_avg_WP_TOP_per_min)
Avgtable_avg_WP_TOP_per_min
```
TOP Kill Contribution
```{r}
Challenger_KC_TOP <- mean(Challenger$KC_TOP,na.rm = TRUE)
Master_KC_TOP <- mean(Master$KC_TOP,na.rm = TRUE)
Diamond_KC_TOP <- mean(Diamond$KC_TOP,na.rm = TRUE)
Plat_KC_TOP <- mean(Plat$KC_TOP,na.rm = TRUE)
Gold_KC_TOP <- mean(Gold$KC_TOP,na.rm = TRUE)
Silver_KC_TOP <- mean(Silver$KC_TOP,na.rm = TRUE)
Bronze_KC_TOP <- mean(Bronze$KC_TOP,na.rm = TRUE)
AvgTable_KC_TOP <- cbind(Challenger_KC_TOP,Master_KC_TOP,Diamond_KC_TOP,Plat_KC_TOP,Gold_KC_TOP,Silver_KC_TOP,Bronze_KC_TOP)
AvgTable_KC_TOP
```
TOP KDA
```{r}
Challenger_KDA_TOP <- mean(Challenger$KDA_TOP,na.rm = TRUE)
Master_KDA_TOP <- mean(Master$KDA_TOP,na.rm = TRUE)
Diamond_KDA_TOP <- mean(Diamond$KDA_TOP,na.rm = TRUE)
Plat_KDA_TOP <- mean(Plat$KDA_TOP,na.rm = TRUE)
Gold_KDA_TOP <- mean(Gold$KDA_TOP,na.rm = TRUE)
Silver_KDA_TOP <- mean(Silver$KDA_TOP,na.rm = TRUE)
Bronze_KDA_TOP <- mean(Bronze$KDA_TOP,na.rm = TRUE)
AvgTable_KDA_TOP <- cbind(Challenger_KDA_TOP,Master_KDA_TOP,Diamond_KDA_TOP,Plat_KDA_TOP,Gold_KDA_TOP,Silver_KDA_TOP,Bronze_KDA_TOP)
AvgTable_KDA_TOP
```
TOP WinRate
```{r}
Challenger_WinRate_TOP <- mean(Challenger$WinRate_TOP,na.rm = TRUE)
Master_WinRate_TOP <- mean(Master$WinRate_TOP,na.rm = TRUE)
Diamond_WinRate_TOP <- mean(Diamond$WinRate_TOP,na.rm = TRUE)
Plat_WinRate_TOP <- mean(Plat$WinRate_TOP,na.rm = TRUE)
Gold_WinRate_TOP <- mean(Gold$WinRate_TOP,na.rm = TRUE)
Silver_WinRate_TOP <- mean(Silver$WinRate_TOP,na.rm = TRUE)
Bronze_WinRate_TOP <- mean(Bronze$WinRate_TOP,na.rm = TRUE)
AvgTable_WinRate_TOP <- cbind(Challenger_WinRate_TOP,Master_WinRate_TOP,Diamond_WinRate_TOP,Plat_WinRate_TOP,Gold_WinRate_TOP,Silver_WinRate_TOP,Bronze_WinRate_TOP)
AvgTable_WinRate_TOP
```
TOP CC per min
```{r}
Challenger_avg_CC_TOP_per_min <- mean(Challenger$CC_TOP/Challenger$PlayedLength_TOP,na.rm = TRUE)*60
Master_avg_CC_TOP_per_min <- mean(Master$CC_TOP/Master$PlayedLength_TOP,na.rm = TRUE)*60
Diamond_avg_CC_TOP_per_min <- mean(Diamond$CC_TOP/Diamond$PlayedLength_TOP,na.rm = TRUE)*60
Plat_avg_CC_TOP_per_min <- mean(Plat$CC_TOP/Plat$PlayedLength_TOP,na.rm = TRUE)*60
Gold_avg_CC_TOP_per_min <- mean(Gold$CC_TOP/Gold$PlayedLength_TOP,na.rm = TRUE)*60
Silver_avg_CC_TOP_per_min <- mean(Silver$CC_TOP/Silver$PlayedLength_TOP,na.rm = TRUE)*60
Bronze_avg_CC_TOP_per_min <- mean(Bronze$CC_TOP/Bronze$PlayedLength_TOP,na.rm = TRUE)*60
Avgtable_avg_CC_TOP_per_min <- cbind(Challenger_avg_CC_TOP_per_min,Master_avg_CC_TOP_per_min,Diamond_avg_CC_TOP_per_min,Plat_avg_CC_TOP_per_min,Gold_avg_CC_TOP_per_min,Silver_avg_CC_TOP_per_min,Bronze_avg_CC_TOP_per_min)
Avgtable_avg_CC_TOP_per_min
```
TOP FB Contribution
```{r}
Challenger_FBContribution_TOP <- mean(Challenger$FBContribution_TOP,na.rm = TRUE)
Master_FBContribution_TOP <- mean(Master$FBContribution_TOP,na.rm = TRUE)
Diamond_FBContribution_TOP <- mean(Diamond$FBContribution_TOP,na.rm = TRUE)
Plat_FBContribution_TOP <- mean(Plat$FBContribution_TOP,na.rm = TRUE)
Gold_FBContribution_TOP <- mean(Gold$FBContribution_TOP,na.rm = TRUE)
Silver_FBContribution_TOP <- mean(Silver$FBContribution_TOP,na.rm = TRUE)
Bronze_FBContribution_TOP <- mean(Bronze$FBContribution_TOP,na.rm = TRUE)
AvgTable_FBContribution_TOP <- cbind(Challenger_FBContribution_TOP,Master_FBContribution_TOP,Diamond_FBContribution_TOP,Plat_FBContribution_TOP,Gold_FBContribution_TOP,Silver_FBContribution_TOP,Bronze_FBContribution_TOP)
AvgTable_FBContribution_TOP
```
TOP Killing Sprees
```{r}
Challenger_KillSprees_TOP <- mean(Challenger$KillSprees_TOP,na.rm = TRUE)
Master_KillSprees_TOP <- mean(Master$KillSprees_TOP,na.rm = TRUE)
Diamond_KillSprees_TOP <- mean(Diamond$KillSprees_TOP,na.rm = TRUE)
Plat_KillSprees_TOP <- mean(Plat$KillSprees_TOP,na.rm = TRUE)
Gold_KillSprees_TOP <- mean(Gold$KillSprees_TOP,na.rm = TRUE)
Silver_KillSprees_TOP <- mean(Silver$KillSprees_TOP,na.rm = TRUE)
Bronze_KillSprees_TOP <- mean(Bronze$KillSprees_TOP,na.rm = TRUE)
AvgTable_KillSprees_TOP <- cbind(Challenger_KillSprees_TOP,Master_KillSprees_TOP,Diamond_KillSprees_TOP,Plat_KillSprees_TOP,Gold_KillSprees_TOP,Silver_KillSprees_TOP,Bronze_KillSprees_TOP)
AvgTable_KillSprees_TOP
```
TOP Largest Killing Sprees
```{r}
Challenger_LargestKillingSpree_TOP <- mean(Challenger$LargestKillingSpree_TOP,na.rm = TRUE)
Master_LargestKillingSpree_TOP <- mean(Master$LargestKillingSpree_TOP,na.rm = TRUE)
Diamond_LargestKillingSpree_TOP <- mean(Diamond$LargestKillingSpree_TOP,na.rm = TRUE)
Plat_LargestKillingSpree_TOP <- mean(Plat$LargestKillingSpree_TOP,na.rm = TRUE)
Gold_LargestKillingSpree_TOP <- mean(Gold$LargestKillingSpree_TOP,na.rm = TRUE)
Silver_LargestKillingSpree_TOP <- mean(Silver$LargestKillingSpree_TOP,na.rm = TRUE)
Bronze_LargestKillingSpree_TOP <- mean(Bronze$LargestKillingSpree_TOP,na.rm = TRUE)
AvgTable_LargestKillingSpree_TOP <- cbind(Challenger_LargestKillingSpree_TOP,Master_LargestKillingSpree_TOP,Diamond_LargestKillingSpree_TOP,Plat_LargestKillingSpree_TOP,Gold_LargestKillingSpree_TOP,Silver_LargestKillingSpree_TOP,Bronze_LargestKillingSpree_TOP)
AvgTable_LargestKillingSpree_TOP
```
TOP CS Difference per min 0-10 min
```{r}
Challenger_avg_CSDiffPerMin_zeroToTen_TOP_per_min <- mean(Challenger$CSDiffPerMin_zeroToTen_TOP/Challenger$PlayedLength_TOP,na.rm = TRUE)*60
Master_avg_CSDiffPerMin_zeroToTen_TOP_per_min <- mean(Master$CSDiffPerMin_zeroToTen_TOP/Master$PlayedLength_TOP,na.rm = TRUE)*60
Diamond_avg_CSDiffPerMin_zeroToTen_TOP_per_min <- mean(Diamond$CSDiffPerMin_zeroToTen_TOP/Diamond$PlayedLength_TOP,na.rm = TRUE)*60
Plat_avg_CSDiffPerMin_zeroToTen_TOP_per_min <- mean(Plat$CSDiffPerMin_zeroToTen_TOP/Plat$PlayedLength_TOP,na.rm = TRUE)*60
Gold_avg_CSDiffPerMin_zeroToTen_TOP_per_min <- mean(Gold$CSDiffPerMin_zeroToTen_TOP/Gold$PlayedLength_TOP,na.rm = TRUE)*60
Silver_avg_CSDiffPerMin_zeroToTen_TOP_per_min <- mean(Silver$CSDiffPerMin_zeroToTen_TOP/Silver$PlayedLength_TOP,na.rm = TRUE)*60
Bronze_avg_CSDiffPerMin_zeroToTen_TOP_per_min <- mean(Bronze$CSDiffPerMin_zeroToTen_TOP/Bronze$PlayedLength_TOP,na.rm = TRUE)*60
Avgtable_avg_CSDiffPerMin_zeroToTen_TOP_per_min <- cbind(Challenger_avg_CSDiffPerMin_zeroToTen_TOP_per_min,Master_avg_CSDiffPerMin_zeroToTen_TOP_per_min,Diamond_avg_CSDiffPerMin_zeroToTen_TOP_per_min,Plat_avg_CSDiffPerMin_zeroToTen_TOP_per_min,Gold_avg_CSDiffPerMin_zeroToTen_TOP_per_min,Silver_avg_CSDiffPerMin_zeroToTen_TOP_per_min,Bronze_avg_CSDiffPerMin_zeroToTen_TOP_per_min)
Avgtable_avg_CSDiffPerMin_zeroToTen_TOP_per_min
```
TOP XP per min 0-10 min
```{r}
Challenger_avg_XPPerMin_zeroToTen_TOP_per_min <- mean(Challenger$XPPerMin_zeroToTen_TOP/Challenger$PlayedLength_TOP,na.rm = TRUE)*60
Master_avg_XPPerMin_zeroToTen_TOP_per_min <- mean(Master$XPPerMin_zeroToTen_TOP/Master$PlayedLength_TOP,na.rm = TRUE)*60
Diamond_avg_XPPerMin_zeroToTen_TOP_per_min <- mean(Diamond$XPPerMin_zeroToTen_TOP/Diamond$PlayedLength_TOP,na.rm = TRUE)*60
Plat_avg_XPPerMin_zeroToTen_TOP_per_min <- mean(Plat$XPPerMin_zeroToTen_TOP/Plat$PlayedLength_TOP,na.rm = TRUE)*60
Gold_avg_XPPerMin_zeroToTen_TOP_per_min <- mean(Gold$XPPerMin_zeroToTen_TOP/Gold$PlayedLength_TOP,na.rm = TRUE)*60
Silver_avg_XPPerMin_zeroToTen_TOP_per_min <- mean(Silver$XPPerMin_zeroToTen_TOP/Silver$PlayedLength_TOP,na.rm = TRUE)*60
Bronze_avg_XPPerMin_zeroToTen_TOP_per_min <- mean(Bronze$XPPerMin_zeroToTen_TOP/Bronze$PlayedLength_TOP,na.rm = TRUE)*60
Avgtable_avg_XPPerMin_zeroToTen_TOP_per_min <- cbind(Challenger_avg_XPPerMin_zeroToTen_TOP_per_min,Master_avg_XPPerMin_zeroToTen_TOP_per_min,Diamond_avg_XPPerMin_zeroToTen_TOP_per_min,Plat_avg_XPPerMin_zeroToTen_TOP_per_min,Gold_avg_XPPerMin_zeroToTen_TOP_per_min,Silver_avg_XPPerMin_zeroToTen_TOP_per_min,Bronze_avg_XPPerMin_zeroToTen_TOP_per_min)
Avgtable_avg_XPPerMin_zeroToTen_TOP_per_min
```
TOP XP per min 0-30 min
```{r}
Challenger_avg_XPPerMin_zeroToThirty_TOP_per_min <- mean(Challenger$XPPerMin_zeroToThirty_TOP/Challenger$PlayedLength_TOP,na.rm = TRUE)*60
Master_avg_XPPerMin_zeroToThirty_TOP_per_min <- mean(Master$XPPerMin_zeroToThirty_TOP/Master$PlayedLength_TOP,na.rm = TRUE)*60
Diamond_avg_XPPerMin_zeroToThirty_TOP_per_min <- mean(Diamond$XPPerMin_zeroToThirty_TOP/Diamond$PlayedLength_TOP,na.rm = TRUE)*60
Plat_avg_XPPerMin_zeroToThirty_TOP_per_min <- mean(Plat$XPPerMin_zeroToThirty_TOP/Plat$PlayedLength_TOP,na.rm = TRUE)*60
Gold_avg_XPPerMin_zeroToThirty_TOP_per_min <- mean(Gold$XPPerMin_zeroToThirty_TOP/Gold$PlayedLength_TOP,na.rm = TRUE)*60
Silver_avg_XPPerMin_zeroToThirty_TOP_per_min <- mean(Silver$XPPerMin_zeroToThirty_TOP/Silver$PlayedLength_TOP,na.rm = TRUE)*60
Bronze_avg_XPPerMin_zeroToThirty_TOP_per_min <- mean(Bronze$XPPerMin_zeroToThirty_TOP/Bronze$PlayedLength_TOP,na.rm = TRUE)*60
Avgtable_avg_XPPerMin_zeroToThirty_TOP_per_min <- cbind(Challenger_avg_XPPerMin_zeroToThirty_TOP_per_min,Master_avg_XPPerMin_zeroToThirty_TOP_per_min,Diamond_avg_XPPerMin_zeroToThirty_TOP_per_min,Plat_avg_XPPerMin_zeroToThirty_TOP_per_min,Gold_avg_XPPerMin_zeroToThirty_TOP_per_min,Silver_avg_XPPerMin_zeroToThirty_TOP_per_min,Bronze_avg_XPPerMin_zeroToThirty_TOP_per_min)
Avgtable_avg_XPPerMin_zeroToThirty_TOP_per_min
```
TOP XP Difference per min 0-10
```{r}
Challenger_avg_XPDiffPerMin_zeroToTen_TOP_per_min <- mean(Challenger$XPDiffPerMin_zeroToTen_TOP/Challenger$PlayedLength_TOP,na.rm = TRUE)*60
Master_avg_XPDiffPerMin_zeroToTen_TOP_per_min <- mean(Master$XPDiffPerMin_zeroToTen_TOP/Master$PlayedLength_TOP,na.rm = TRUE)*60
Diamond_avg_XPDiffPerMin_zeroToTen_TOP_per_min <- mean(Diamond$XPDiffPerMin_zeroToTen_TOP/Diamond$PlayedLength_TOP,na.rm = TRUE)*60
Plat_avg_XPDiffPerMin_zeroToTen_TOP_per_min <- mean(Plat$XPDiffPerMin_zeroToTen_TOP/Plat$PlayedLength_TOP,na.rm = TRUE)*60
Gold_avg_XPDiffPerMin_zeroToTen_TOP_per_min <- mean(Gold$XPDiffPerMin_zeroToTen_TOP/Gold$PlayedLength_TOP,na.rm = TRUE)*60
Silver_avg_XPDiffPerMin_zeroToTen_TOP_per_min <- mean(Silver$XPDiffPerMin_zeroToTen_TOP/Silver$PlayedLength_TOP,na.rm = TRUE)*60
Bronze_avg_XPDiffPerMin_zeroToTen_TOP_per_min <- mean(Bronze$XPDiffPerMin_zeroToTen_TOP/Bronze$PlayedLength_TOP,na.rm = TRUE)*60
Avgtable_avg_XPDiffPerMin_zeroToTen_TOP_per_min <- cbind(Challenger_avg_XPDiffPerMin_zeroToTen_TOP_per_min,Master_avg_XPDiffPerMin_zeroToTen_TOP_per_min,Diamond_avg_XPDiffPerMin_zeroToTen_TOP_per_min,Plat_avg_XPDiffPerMin_zeroToTen_TOP_per_min,Gold_avg_XPDiffPerMin_zeroToTen_TOP_per_min,Silver_avg_XPDiffPerMin_zeroToTen_TOP_per_min,Bronze_avg_XPDiffPerMin_zeroToTen_TOP_per_min)
Avgtable_avg_XPDiffPerMin_zeroToTen_TOP_per_min
```
TOP XP Difference per min 10-20
```{r}
Challenger_avg_XPDiffPerMin_tenToTwenty_TOP_per_min <- mean(Challenger$XPDiffPerMin_tenToTwenty_TOP/Challenger$PlayedLength_TOP,na.rm = TRUE)*60
Master_avg_XPDiffPerMin_tenToTwenty_TOP_per_min <- mean(Master$XPDiffPerMin_tenToTwenty_TOP/Master$PlayedLength_TOP,na.rm = TRUE)*60
Diamond_avg_XPDiffPerMin_tenToTwenty_TOP_per_min <- mean(Diamond$XPDiffPerMin_tenToTwenty_TOP/Diamond$PlayedLength_TOP,na.rm = TRUE)*60
Plat_avg_XPDiffPerMin_tenToTwenty_TOP_per_min <- mean(Plat$XPDiffPerMin_tenToTwenty_TOP/Plat$PlayedLength_TOP,na.rm = TRUE)*60
Gold_avg_XPDiffPerMin_tenToTwenty_TOP_per_min <- mean(Gold$XPDiffPerMin_tenToTwenty_TOP/Gold$PlayedLength_TOP,na.rm = TRUE)*60
Silver_avg_XPDiffPerMin_tenToTwenty_TOP_per_min <- mean(Silver$XPDiffPerMin_tenToTwenty_TOP/Silver$PlayedLength_TOP,na.rm = TRUE)*60
Bronze_avg_XPDiffPerMin_tenToTwenty_TOP_per_min <- mean(Bronze$XPDiffPerMin_tenToTwenty_TOP/Bronze$PlayedLength_TOP,na.rm = TRUE)*60
Avgtable_avg_XPDiffPerMin_tenToTwenty_TOP_per_min <- cbind(Challenger_avg_XPDiffPerMin_tenToTwenty_TOP_per_min,Master_avg_XPDiffPerMin_tenToTwenty_TOP_per_min,Diamond_avg_XPDiffPerMin_tenToTwenty_TOP_per_min,Plat_avg_XPDiffPerMin_tenToTwenty_TOP_per_min,Gold_avg_XPDiffPerMin_tenToTwenty_TOP_per_min,Silver_avg_XPDiffPerMin_tenToTwenty_TOP_per_min,Bronze_avg_XPDiffPerMin_tenToTwenty_TOP_per_min)
Avgtable_avg_XPDiffPerMin_tenToTwenty_TOP_per_min
```
TOP XP Difference per min 20-30
```{r}
Challenger_avg_XPDiffPerMin_twentyToThirty_TOP_per_min <- mean(Challenger$XPDiffPerMin_twentyToThirty_TOP/Challenger$PlayedLength_TOP,na.rm = TRUE)*60
Master_avg_XPDiffPerMin_twentyToThirty_TOP_per_min <- mean(Master$XPDiffPerMin_twentyToThirty_TOP/Master$PlayedLength_TOP,na.rm = TRUE)*60
Diamond_avg_XPDiffPerMin_twentyToThirty_TOP_per_min <- mean(Diamond$XPDiffPerMin_twentyToThirty_TOP/Diamond$PlayedLength_TOP,na.rm = TRUE)*60
Plat_avg_XPDiffPerMin_twentyToThirty_TOP_per_min <- mean(Plat$XPDiffPerMin_twentyToThirty_TOP/Plat$PlayedLength_TOP,na.rm = TRUE)*60
Gold_avg_XPDiffPerMin_twentyToThirty_TOP_per_min <- mean(Gold$XPDiffPerMin_twentyToThirty_TOP/Gold$PlayedLength_TOP,na.rm = TRUE)*60
Silver_avg_XPDiffPerMin_twentyToThirty_TOP_per_min <- mean(Silver$XPDiffPerMin_twentyToThirty_TOP/Silver$PlayedLength_TOP,na.rm = TRUE)*60
Bronze_avg_XPDiffPerMin_twentyToThirty_TOP_per_min <- mean(Bronze$XPDiffPerMin_twentyToThirty_TOP/Bronze$PlayedLength_TOP,na.rm = TRUE)*60
Avgtable_avg_XPDiffPerMin_twentyToThirty_TOP_per_min <- cbind(Challenger_avg_XPDiffPerMin_twentyToThirty_TOP_per_min,Master_avg_XPDiffPerMin_twentyToThirty_TOP_per_min,Diamond_avg_XPDiffPerMin_twentyToThirty_TOP_per_min,Plat_avg_XPDiffPerMin_twentyToThirty_TOP_per_min,Gold_avg_XPDiffPerMin_twentyToThirty_TOP_per_min,Silver_avg_XPDiffPerMin_twentyToThirty_TOP_per_min,Bronze_avg_XPDiffPerMin_twentyToThirty_TOP_per_min)
Avgtable_avg_XPDiffPerMin_twentyToThirty_TOP_per_min
```
TOP Team Gold Percentage
```{r}
Challenger_TeamGoldPercent_TOP <- mean(Challenger$TeamGoldPercent_TOP,na.rm = TRUE)
Master_TeamGoldPercent_TOP <- mean(Master$TeamGoldPercent_TOP,na.rm = TRUE)
Diamond_TeamGoldPercent_TOP <- mean(Diamond$TeamGoldPercent_TOP,na.rm = TRUE)
Plat_TeamGoldPercent_TOP <- mean(Plat$TeamGoldPercent_TOP,na.rm = TRUE)
Gold_TeamGoldPercent_TOP <- mean(Gold$TeamGoldPercent_TOP,na.rm = TRUE)
Silver_TeamGoldPercent_TOP <- mean(Silver$TeamGoldPercent_TOP,na.rm = TRUE)
Bronze_TeamGoldPercent_TOP <- mean(Bronze$TeamGoldPercent_TOP,na.rm = TRUE)
AvgTable_TeamGoldPercent_TOP <- cbind(Challenger_TeamGoldPercent_TOP,Master_TeamGoldPercent_TOP,Diamond_TeamGoldPercent_TOP,Plat_TeamGoldPercent_TOP,Gold_TeamGoldPercent_TOP,Silver_TeamGoldPercent_TOP,Bronze_TeamGoldPercent_TOP)
AvgTable_TeamGoldPercent_TOP
```
TOP Team Damage Percentage
```{r}
Challenger_TeamDamagePercent_TOP <- mean(Challenger$TeamDamagePercent_TOP,na.rm = TRUE)
Master_TeamDamagePercent_TOP <- mean(Master$TeamDamagePercent_TOP,na.rm = TRUE)
Diamond_TeamDamagePercent_TOP <- mean(Diamond$TeamDamagePercent_TOP,na.rm = TRUE)
Plat_TeamDamagePercent_TOP <- mean(Plat$TeamDamagePercent_TOP,na.rm = TRUE)
Gold_TeamDamagePercent_TOP <- mean(Gold$TeamDamagePercent_TOP,na.rm = TRUE)
Silver_TeamDamagePercent_TOP <- mean(Silver$TeamDamagePercent_TOP,na.rm = TRUE)
Bronze_TeamDamagePercent_TOP <- mean(Bronze$TeamDamagePercent_TOP,na.rm = TRUE)
AvgTable_TeamDamagePercent_TOP <- cbind(Challenger_TeamDamagePercent_TOP,Master_TeamDamagePercent_TOP,Diamond_TeamDamagePercent_TOP,Plat_TeamDamagePercent_TOP,Gold_TeamDamagePercent_TOP,Silver_TeamDamagePercent_TOP,Bronze_TeamDamagePercent_TOP)
AvgTable_TeamDamagePercent_TOP
```



# JG
JG Damage Dealt per minute
```{r}
Challenger_avg_D_JG_per_min <- mean(Challenger$D_JG/Challenger$PlayedLength_JG,na.rm = TRUE)*60
Master_avg_D_JG_per_min <- mean(Master$D_JG/Master$PlayedLength_JG,na.rm = TRUE)*60
Diamond_avg_D_JG_per_min <- mean(Diamond$D_JG/Diamond$PlayedLength_JG,na.rm = TRUE)*60
Plat_avg_D_JG_per_min <- mean(Plat$D_JG/Plat$PlayedLength_JG,na.rm = TRUE)*60
Gold_avg_D_JG_per_min <- mean(Gold$D_JG/Gold$PlayedLength_JG,na.rm = TRUE)*60
Silver_avg_D_JG_per_min <- mean(Silver$D_JG/Silver$PlayedLength_JG,na.rm = TRUE)*60
Bronze_avg_D_JG_per_min <- mean(Bronze$D_JG/Bronze$PlayedLength_JG,na.rm = TRUE)*60
Avgtable_avg_D_JG_per_min <- cbind(Challenger_avg_D_JG_per_min,Master_avg_D_JG_per_min,Diamond_avg_D_JG_per_min,Plat_avg_D_JG_per_min,Gold_avg_D_JG_per_min,Silver_avg_D_JG_per_min,Bronze_avg_D_JG_per_min)
Avgtable_avg_D_JG_per_min
```
JG Damagen Taken per min
```{r}
Challenger_avg_DT_JG_per_min <- mean(Challenger$DT_JG/Challenger$PlayedLength_JG,na.rm = TRUE)*60
Master_avg_DT_JG_per_min <- mean(Master$DT_JG/Master$PlayedLength_JG,na.rm = TRUE)*60
Diamond_avg_DT_JG_per_min <- mean(Diamond$DT_JG/Diamond$PlayedLength_JG,na.rm = TRUE)*60
Plat_avg_DT_JG_per_min <- mean(Plat$DT_JG/Plat$PlayedLength_JG,na.rm = TRUE)*60
Gold_avg_DT_JG_per_min <- mean(Gold$DT_JG/Gold$PlayedLength_JG,na.rm = TRUE)*60
Silver_avg_DT_JG_per_min <- mean(Silver$DT_JG/Silver$PlayedLength_JG,na.rm = TRUE)*60
Bronze_avg_DT_JG_per_min <- mean(Bronze$DT_JG/Bronze$PlayedLength_JG,na.rm = TRUE)*60
Avgtable_avg_DT_JG_per_min <- cbind(Challenger_avg_DT_JG_per_min,Master_avg_DT_JG_per_min,Diamond_avg_DT_JG_per_min,Plat_avg_DT_JG_per_min,Gold_avg_DT_JG_per_min,Silver_avg_DT_JG_per_min,Bronze_avg_DT_JG_per_min)
Avgtable_avg_DT_JG_per_min
```
JG CS in first 10 mins
```{r}
Challenger_CS_zeroToTen_JG <- mean(Challenger$CS_zeroToTen_JG,na.rm = TRUE)
Master_CS_zeroToTen_JG <- mean(Master$CS_zeroToTen_JG,na.rm = TRUE)
Diamond_CS_zeroToTen_JG <- mean(Diamond$CS_zeroToTen_JG,na.rm = TRUE)
Plat_CS_zeroToTen_JG <- mean(Plat$CS_zeroToTen_JG,na.rm = TRUE)
Gold_CS_zeroToTen_JG <- mean(Gold$CS_zeroToTen_JG,na.rm = TRUE)
Silver_CS_zeroToTen_JG <- mean(Silver$CS_zeroToTen_JG,na.rm = TRUE)
Bronze_CS_zeroToTen_JG <- mean(Bronze$CS_zeroToTen_JG,na.rm = TRUE)
AvgTable_CS_zeroToTen_JG <- cbind(Challenger_CS_zeroToTen_JG,Master_CS_zeroToTen_JG,Diamond_CS_zeroToTen_JG,Plat_CS_zeroToTen_JG,Gold_CS_zeroToTen_JG,Silver_CS_zeroToTen_JG,Bronze_CS_zeroToTen_JG)
AvgTable_CS_zeroToTen_JG
```
JG CS per min
```{r}
Challenger_avg_CS_JG_per_min <- mean(Challenger$CS_JG/Challenger$PlayedLength_JG,na.rm = TRUE)*60
Master_avg_CS_JG_per_min <- mean(Master$CS_JG/Master$PlayedLength_JG,na.rm = TRUE)*60
Diamond_avg_CS_JG_per_min <- mean(Diamond$CS_JG/Diamond$PlayedLength_JG,na.rm = TRUE)*60
Plat_avg_CS_JG_per_min <- mean(Plat$CS_JG/Plat$PlayedLength_JG,na.rm = TRUE)*60
Gold_avg_CS_JG_per_min <- mean(Gold$CS_JG/Gold$PlayedLength_JG,na.rm = TRUE)*60
Silver_avg_CS_JG_per_min <- mean(Silver$CS_JG/Silver$PlayedLength_JG,na.rm = TRUE)*60
Bronze_avg_CS_JG_per_min <- mean(Bronze$CS_JG/Bronze$PlayedLength_JG,na.rm = TRUE)*60
AvgTable_avg_CS_JG_per_min <- cbind(Challenger_avg_CS_JG_per_min,Master_avg_CS_JG_per_min,Diamond_avg_CS_JG_per_min,Plat_avg_CS_JG_per_min,Gold_avg_CS_JG_per_min,Silver_avg_CS_JG_per_min,Bronze_avg_CS_JG_per_min)
AvgTable_avg_CS_JG_per_min
```
JG Healing per min
```{r}
Challenger_avg_H_JG_per_min <- mean(Challenger$H_JG/Challenger$PlayedLength_JG,na.rm = TRUE)*60
Master_avg_H_JG_per_min <- mean(Master$H_JG/Master$PlayedLength_JG,na.rm = TRUE)*60
Diamond_avg_H_JG_per_min <- mean(Diamond$H_JG/Diamond$PlayedLength_JG,na.rm = TRUE)*60
Plat_avg_H_JG_per_min <- mean(Plat$H_JG/Plat$PlayedLength_JG,na.rm = TRUE)*60
Gold_avg_H_JG_per_min <- mean(Gold$H_JG/Gold$PlayedLength_JG,na.rm = TRUE)*60
Silver_avg_H_JG_per_min <- mean(Silver$H_JG/Silver$PlayedLength_JG,na.rm = TRUE)*60
Bronze_avg_H_JG_per_min <- mean(Bronze$H_JG/Bronze$PlayedLength_JG,na.rm = TRUE)*60
Avgtable_avg_H_JG_per_min <- cbind(Challenger_avg_H_JG_per_min,Master_avg_H_JG_per_min,Diamond_avg_H_JG_per_min,Plat_avg_H_JG_per_min,Gold_avg_H_JG_per_min,Silver_avg_H_JG_per_min,Bronze_avg_H_JG_per_min)
Avgtable_avg_H_JG_per_min
```
JG Gold per min
```{r}
Challenger_avg_G_JG_per_min <- mean(Challenger$G_JG/Challenger$PlayedLength_JG,na.rm = TRUE)*60
Master_avg_G_JG_per_min <- mean(Master$G_JG/Master$PlayedLength_JG,na.rm = TRUE)*60
Diamond_avg_G_JG_per_min <- mean(Diamond$G_JG/Diamond$PlayedLength_JG,na.rm = TRUE)*60
Plat_avg_G_JG_per_min <- mean(Plat$G_JG/Plat$PlayedLength_JG,na.rm = TRUE)*60
Gold_avg_G_JG_per_min <- mean(Gold$G_JG/Gold$PlayedLength_JG,na.rm = TRUE)*60
Silver_avg_G_JG_per_min <- mean(Silver$G_JG/Silver$PlayedLength_JG,na.rm = TRUE)*60
Bronze_avg_G_JG_per_min <- mean(Bronze$G_JG/Bronze$PlayedLength_JG,na.rm = TRUE)*60
Avgtable_avg_G_JG_per_min <- cbind(Challenger_avg_G_JG_per_min,Master_avg_G_JG_per_min,Diamond_avg_G_JG_per_min,Plat_avg_G_JG_per_min,Gold_avg_G_JG_per_min,Silver_avg_G_JG_per_min,Bronze_avg_G_JG_per_min)
Avgtable_avg_G_JG_per_min
```
JG Kill per min
```{r}
Challenger_avg_K_JG_per_min <- mean(Challenger$K_JG/Challenger$PlayedLength_JG,na.rm = TRUE)*60
Master_avg_K_JG_per_min <- mean(Master$K_JG/Master$PlayedLength_JG,na.rm = TRUE)*60
Diamond_avg_K_JG_per_min <- mean(Diamond$K_JG/Diamond$PlayedLength_JG,na.rm = TRUE)*60
Plat_avg_K_JG_per_min <- mean(Plat$K_JG/Plat$PlayedLength_JG,na.rm = TRUE)*60
Gold_avg_K_JG_per_min <- mean(Gold$K_JG/Gold$PlayedLength_JG,na.rm = TRUE)*60
Silver_avg_K_JG_per_min <- mean(Silver$K_JG/Silver$PlayedLength_JG,na.rm = TRUE)*60
Bronze_avg_K_JG_per_min <- mean(Bronze$K_JG/Bronze$PlayedLength_JG,na.rm = TRUE)*60
Avgtable_avg_K_JG_per_min <- cbind(Challenger_avg_K_JG_per_min,Master_avg_K_JG_per_min,Diamond_avg_K_JG_per_min,Plat_avg_K_JG_per_min,Gold_avg_K_JG_per_min,Silver_avg_K_JG_per_min,Bronze_avg_K_JG_per_min)
Avgtable_avg_K_JG_per_min
```
JG Death per min
```{r}
Challenger_avg_De_JG_per_min <- mean(Challenger$De_JG/Challenger$PlayedLength_JG,na.rm = TRUE)*60
Master_avg_De_JG_per_min <- mean(Master$De_JG/Master$PlayedLength_JG,na.rm = TRUE)*60
Diamond_avg_De_JG_per_min <- mean(Diamond$De_JG/Diamond$PlayedLength_JG,na.rm = TRUE)*60
Plat_avg_De_JG_per_min <- mean(Plat$De_JG/Plat$PlayedLength_JG,na.rm = TRUE)*60
Gold_avg_De_JG_per_min <- mean(Gold$De_JG/Gold$PlayedLength_JG,na.rm = TRUE)*60
Silver_avg_De_JG_per_min <- mean(Silver$De_JG/Silver$PlayedLength_JG,na.rm = TRUE)*60
Bronze_avg_De_JG_per_min <- mean(Bronze$De_JG/Bronze$PlayedLength_JG,na.rm = TRUE)*60
Avgtable_avg_De_JG_per_min <- cbind(Challenger_avg_De_JG_per_min,Master_avg_De_JG_per_min,Diamond_avg_De_JG_per_min,Plat_avg_De_JG_per_min,Gold_avg_De_JG_per_min,Silver_avg_De_JG_per_min,Bronze_avg_De_JG_per_min)
Avgtable_avg_De_JG_per_min
```
JG Assist per min
```{r}
Challenger_avg_A_JG_per_min <- mean(Challenger$A_JG/Challenger$PlayedLength_JG,na.rm = TRUE)*60
Master_avg_A_JG_per_min <- mean(Master$A_JG/Master$PlayedLength_JG,na.rm = TRUE)*60
Diamond_avg_A_JG_per_min <- mean(Diamond$A_JG/Diamond$PlayedLength_JG,na.rm = TRUE)*60
Plat_avg_A_JG_per_min <- mean(Plat$A_JG/Plat$PlayedLength_JG,na.rm = TRUE)*60
Gold_avg_A_JG_per_min <- mean(Gold$A_JG/Gold$PlayedLength_JG,na.rm = TRUE)*60
Silver_avg_A_JG_per_min <- mean(Silver$A_JG/Silver$PlayedLength_JG,na.rm = TRUE)*60
Bronze_avg_A_JG_per_min <- mean(Bronze$A_JG/Bronze$PlayedLength_JG,na.rm = TRUE)*60
Avgtable_avg_A_JG_per_min <- cbind(Challenger_avg_A_JG_per_min,Master_avg_A_JG_per_min,Diamond_avg_A_JG_per_min,Plat_avg_A_JG_per_min,Gold_avg_A_JG_per_min,Silver_avg_A_JG_per_min,Bronze_avg_A_JG_per_min)
Avgtable_avg_A_JG_per_min
```
JG Vision Ward per min
```{r}
Challenger_avg_VW_JG_per_min <- mean(Challenger$VW_JG/Challenger$PlayedLength_JG,na.rm = TRUE)*60
Master_avg_VW_JG_per_min <- mean(Master$VW_JG/Master$PlayedLength_JG,na.rm = TRUE)*60
Diamond_avg_VW_JG_per_min <- mean(Diamond$VW_JG/Diamond$PlayedLength_JG,na.rm = TRUE)*60
Plat_avg_VW_JG_per_min <- mean(Plat$VW_JG/Plat$PlayedLength_JG,na.rm = TRUE)*60
Gold_avg_VW_JG_per_min <- mean(Gold$VW_JG/Gold$PlayedLength_JG,na.rm = TRUE)*60
Silver_avg_VW_JG_per_min <- mean(Silver$VW_JG/Silver$PlayedLength_JG,na.rm = TRUE)*60
Bronze_avg_VW_JG_per_min <- mean(Bronze$VW_JG/Bronze$PlayedLength_JG,na.rm = TRUE)*60
Avgtable_avg_VW_JG_per_min <- cbind(Challenger_avg_VW_JG_per_min,Master_avg_VW_JG_per_min,Diamond_avg_VW_JG_per_min,Plat_avg_VW_JG_per_min,Gold_avg_VW_JG_per_min,Silver_avg_VW_JG_per_min,Bronze_avg_VW_JG_per_min)
Avgtable_avg_VW_JG_per_min
```
JG Wards Kill per min
```{r}
Challenger_avg_WK_JG_per_min <- mean(Challenger$WK_JG/Challenger$PlayedLength_JG,na.rm = TRUE)*60
Master_avg_WK_JG_per_min <- mean(Master$WK_JG/Master$PlayedLength_JG,na.rm = TRUE)*60
Diamond_avg_WK_JG_per_min <- mean(Diamond$WK_JG/Diamond$PlayedLength_JG,na.rm = TRUE)*60
Plat_avg_WK_JG_per_min <- mean(Plat$WK_JG/Plat$PlayedLength_JG,na.rm = TRUE)*60
Gold_avg_WK_JG_per_min <- mean(Gold$WK_JG/Gold$PlayedLength_JG,na.rm = TRUE)*60
Silver_avg_WK_JG_per_min <- mean(Silver$WK_JG/Silver$PlayedLength_JG,na.rm = TRUE)*60
Bronze_avg_WK_JG_per_min <- mean(Bronze$WK_JG/Bronze$PlayedLength_JG,na.rm = TRUE)*60
Avgtable_avg_WK_JG_per_min <- cbind(Challenger_avg_WK_JG_per_min,Master_avg_WK_JG_per_min,Diamond_avg_WK_JG_per_min,Plat_avg_WK_JG_per_min,Gold_avg_WK_JG_per_min,Silver_avg_WK_JG_per_min,Bronze_avg_WK_JG_per_min)
Avgtable_avg_WK_JG_per_min
```
JG Wards Placed per min
```{r}
Challenger_avg_WP_JG_per_min <- mean(Challenger$WP_JG/Challenger$PlayedLength_JG,na.rm = TRUE)*60
Master_avg_WP_JG_per_min <- mean(Master$WP_JG/Master$PlayedLength_JG,na.rm = TRUE)*60
Diamond_avg_WP_JG_per_min <- mean(Diamond$WP_JG/Diamond$PlayedLength_JG,na.rm = TRUE)*60
Plat_avg_WP_JG_per_min <- mean(Plat$WP_JG/Plat$PlayedLength_JG,na.rm = TRUE)*60
Gold_avg_WP_JG_per_min <- mean(Gold$WP_JG/Gold$PlayedLength_JG,na.rm = TRUE)*60
Silver_avg_WP_JG_per_min <- mean(Silver$WP_JG/Silver$PlayedLength_JG,na.rm = TRUE)*60
Bronze_avg_WP_JG_per_min <- mean(Bronze$WP_JG/Bronze$PlayedLength_JG,na.rm = TRUE)*60
Avgtable_avg_WP_JG_per_min <- cbind(Challenger_avg_WP_JG_per_min,Master_avg_WP_JG_per_min,Diamond_avg_WP_JG_per_min,Plat_avg_WP_JG_per_min,Gold_avg_WP_JG_per_min,Silver_avg_WP_JG_per_min,Bronze_avg_WP_JG_per_min)
Avgtable_avg_WP_JG_per_min
```
JG Kill Contribution
```{r}
Challenger_KC_JG <- mean(Challenger$KC_JG,na.rm = TRUE)
Master_KC_JG <- mean(Master$KC_JG,na.rm = TRUE)
Diamond_KC_JG <- mean(Diamond$KC_JG,na.rm = TRUE)
Plat_KC_JG <- mean(Plat$KC_JG,na.rm = TRUE)
Gold_KC_JG <- mean(Gold$KC_JG,na.rm = TRUE)
Silver_KC_JG <- mean(Silver$KC_JG,na.rm = TRUE)
Bronze_KC_JG <- mean(Bronze$KC_JG,na.rm = TRUE)
AvgTable_KC_JG <- cbind(Challenger_KC_JG,Master_KC_JG,Diamond_KC_JG,Plat_KC_JG,Gold_KC_JG,Silver_KC_JG,Bronze_KC_JG)
AvgTable_KC_JG
```
JG KDA
```{r}
Challenger_KDA_JG <- mean(Challenger$KDA_JG,na.rm = TRUE)
Master_KDA_JG <- mean(Master$KDA_JG,na.rm = TRUE)
Diamond_KDA_JG <- mean(Diamond$KDA_JG,na.rm = TRUE)
Plat_KDA_JG <- mean(Plat$KDA_JG,na.rm = TRUE)
Gold_KDA_JG <- mean(Gold$KDA_JG,na.rm = TRUE)
Silver_KDA_JG <- mean(Silver$KDA_JG,na.rm = TRUE)
Bronze_KDA_JG <- mean(Bronze$KDA_JG,na.rm = TRUE)
AvgTable_KDA_JG <- cbind(Challenger_KDA_JG,Master_KDA_JG,Diamond_KDA_JG,Plat_KDA_JG,Gold_KDA_JG,Silver_KDA_JG,Bronze_KDA_JG)
AvgTable_KDA_JG
```
JG WinRate
```{r}
Challenger_WinRate_JG <- mean(Challenger$WinRate_JG,na.rm = TRUE)
Master_WinRate_JG <- mean(Master$WinRate_JG,na.rm = TRUE)
Diamond_WinRate_JG <- mean(Diamond$WinRate_JG,na.rm = TRUE)
Plat_WinRate_JG <- mean(Plat$WinRate_JG,na.rm = TRUE)
Gold_WinRate_JG <- mean(Gold$WinRate_JG,na.rm = TRUE)
Silver_WinRate_JG <- mean(Silver$WinRate_JG,na.rm = TRUE)
Bronze_WinRate_JG <- mean(Bronze$WinRate_JG,na.rm = TRUE)
AvgTable_WinRate_JG <- cbind(Challenger_WinRate_JG,Master_WinRate_JG,Diamond_WinRate_JG,Plat_WinRate_JG,Gold_WinRate_JG,Silver_WinRate_JG,Bronze_WinRate_JG)
AvgTable_WinRate_JG
```
JG CC per min
```{r}
Challenger_avg_CC_JG_per_min <- mean(Challenger$CC_JG/Challenger$PlayedLength_JG,na.rm = TRUE)*60
Master_avg_CC_JG_per_min <- mean(Master$CC_JG/Master$PlayedLength_JG,na.rm = TRUE)*60
Diamond_avg_CC_JG_per_min <- mean(Diamond$CC_JG/Diamond$PlayedLength_JG,na.rm = TRUE)*60
Plat_avg_CC_JG_per_min <- mean(Plat$CC_JG/Plat$PlayedLength_JG,na.rm = TRUE)*60
Gold_avg_CC_JG_per_min <- mean(Gold$CC_JG/Gold$PlayedLength_JG,na.rm = TRUE)*60
Silver_avg_CC_JG_per_min <- mean(Silver$CC_JG/Silver$PlayedLength_JG,na.rm = TRUE)*60
Bronze_avg_CC_JG_per_min <- mean(Bronze$CC_JG/Bronze$PlayedLength_JG,na.rm = TRUE)*60
Avgtable_avg_CC_JG_per_min <- cbind(Challenger_avg_CC_JG_per_min,Master_avg_CC_JG_per_min,Diamond_avg_CC_JG_per_min,Plat_avg_CC_JG_per_min,Gold_avg_CC_JG_per_min,Silver_avg_CC_JG_per_min,Bronze_avg_CC_JG_per_min)
Avgtable_avg_CC_JG_per_min
```
JG FB Contribution
```{r}
Challenger_FBContribution_JG <- mean(Challenger$FBContribution_JG,na.rm = TRUE)
Master_FBContribution_JG <- mean(Master$FBContribution_JG,na.rm = TRUE)
Diamond_FBContribution_JG <- mean(Diamond$FBContribution_JG,na.rm = TRUE)
Plat_FBContribution_JG <- mean(Plat$FBContribution_JG,na.rm = TRUE)
Gold_FBContribution_JG <- mean(Gold$FBContribution_JG,na.rm = TRUE)
Silver_FBContribution_JG <- mean(Silver$FBContribution_JG,na.rm = TRUE)
Bronze_FBContribution_JG <- mean(Bronze$FBContribution_JG,na.rm = TRUE)
AvgTable_FBContribution_JG <- cbind(Challenger_FBContribution_JG,Master_FBContribution_JG,Diamond_FBContribution_JG,Plat_FBContribution_JG,Gold_FBContribution_JG,Silver_FBContribution_JG,Bronze_FBContribution_JG)
AvgTable_FBContribution_JG
```
JG Killing Sprees
```{r}
Challenger_KillSprees_JG <- mean(Challenger$KillSprees_JG,na.rm = TRUE)
Master_KillSprees_JG <- mean(Master$KillSprees_JG,na.rm = TRUE)
Diamond_KillSprees_JG <- mean(Diamond$KillSprees_JG,na.rm = TRUE)
Plat_KillSprees_JG <- mean(Plat$KillSprees_JG,na.rm = TRUE)
Gold_KillSprees_JG <- mean(Gold$KillSprees_JG,na.rm = TRUE)
Silver_KillSprees_JG <- mean(Silver$KillSprees_JG,na.rm = TRUE)
Bronze_KillSprees_JG <- mean(Bronze$KillSprees_JG,na.rm = TRUE)
AvgTable_KillSprees_JG <- cbind(Challenger_KillSprees_JG,Master_KillSprees_JG,Diamond_KillSprees_JG,Plat_KillSprees_JG,Gold_KillSprees_JG,Silver_KillSprees_JG,Bronze_KillSprees_JG)
AvgTable_KillSprees_JG
```
JG Largest Killing Sprees
```{r}
Challenger_LargestKillingSpree_JG <- mean(Challenger$LargestKillingSpree_JG,na.rm = TRUE)
Master_LargestKillingSpree_JG <- mean(Master$LargestKillingSpree_JG,na.rm = TRUE)
Diamond_LargestKillingSpree_JG <- mean(Diamond$LargestKillingSpree_JG,na.rm = TRUE)
Plat_LargestKillingSpree_JG <- mean(Plat$LargestKillingSpree_JG,na.rm = TRUE)
Gold_LargestKillingSpree_JG <- mean(Gold$LargestKillingSpree_JG,na.rm = TRUE)
Silver_LargestKillingSpree_JG <- mean(Silver$LargestKillingSpree_JG,na.rm = TRUE)
Bronze_LargestKillingSpree_JG <- mean(Bronze$LargestKillingSpree_JG,na.rm = TRUE)
AvgTable_LargestKillingSpree_JG <- cbind(Challenger_LargestKillingSpree_JG,Master_LargestKillingSpree_JG,Diamond_LargestKillingSpree_JG,Plat_LargestKillingSpree_JG,Gold_LargestKillingSpree_JG,Silver_LargestKillingSpree_JG,Bronze_LargestKillingSpree_JG)
AvgTable_LargestKillingSpree_JG
```
JG CS Difference per min 0-10 min
```{r}
Challenger_avg_CSDiffPerMin_zeroToTen_JG_per_min <- mean(Challenger$CSDiffPerMin_zeroToTen_JG/Challenger$PlayedLength_JG,na.rm = TRUE)*60
Master_avg_CSDiffPerMin_zeroToTen_JG_per_min <- mean(Master$CSDiffPerMin_zeroToTen_JG/Master$PlayedLength_JG,na.rm = TRUE)*60
Diamond_avg_CSDiffPerMin_zeroToTen_JG_per_min <- mean(Diamond$CSDiffPerMin_zeroToTen_JG/Diamond$PlayedLength_JG,na.rm = TRUE)*60
Plat_avg_CSDiffPerMin_zeroToTen_JG_per_min <- mean(Plat$CSDiffPerMin_zeroToTen_JG/Plat$PlayedLength_JG,na.rm = TRUE)*60
Gold_avg_CSDiffPerMin_zeroToTen_JG_per_min <- mean(Gold$CSDiffPerMin_zeroToTen_JG/Gold$PlayedLength_JG,na.rm = TRUE)*60
Silver_avg_CSDiffPerMin_zeroToTen_JG_per_min <- mean(Silver$CSDiffPerMin_zeroToTen_JG/Silver$PlayedLength_JG,na.rm = TRUE)*60
Bronze_avg_CSDiffPerMin_zeroToTen_JG_per_min <- mean(Bronze$CSDiffPerMin_zeroToTen_JG/Bronze$PlayedLength_JG,na.rm = TRUE)*60
Avgtable_avg_CSDiffPerMin_zeroToTen_JG_per_min <- cbind(Challenger_avg_CSDiffPerMin_zeroToTen_JG_per_min,Master_avg_CSDiffPerMin_zeroToTen_JG_per_min,Diamond_avg_CSDiffPerMin_zeroToTen_JG_per_min,Plat_avg_CSDiffPerMin_zeroToTen_JG_per_min,Gold_avg_CSDiffPerMin_zeroToTen_JG_per_min,Silver_avg_CSDiffPerMin_zeroToTen_JG_per_min,Bronze_avg_CSDiffPerMin_zeroToTen_JG_per_min)
Avgtable_avg_CSDiffPerMin_zeroToTen_JG_per_min
```
JG XP per min 0-10 min
```{r}
Challenger_avg_XPPerMin_zeroToTen_JG_per_min <- mean(Challenger$XPPerMin_zeroToTen_JG/Challenger$PlayedLength_JG,na.rm = TRUE)*60
Master_avg_XPPerMin_zeroToTen_JG_per_min <- mean(Master$XPPerMin_zeroToTen_JG/Master$PlayedLength_JG,na.rm = TRUE)*60
Diamond_avg_XPPerMin_zeroToTen_JG_per_min <- mean(Diamond$XPPerMin_zeroToTen_JG/Diamond$PlayedLength_JG,na.rm = TRUE)*60
Plat_avg_XPPerMin_zeroToTen_JG_per_min <- mean(Plat$XPPerMin_zeroToTen_JG/Plat$PlayedLength_JG,na.rm = TRUE)*60
Gold_avg_XPPerMin_zeroToTen_JG_per_min <- mean(Gold$XPPerMin_zeroToTen_JG/Gold$PlayedLength_JG,na.rm = TRUE)*60
Silver_avg_XPPerMin_zeroToTen_JG_per_min <- mean(Silver$XPPerMin_zeroToTen_JG/Silver$PlayedLength_JG,na.rm = TRUE)*60
Bronze_avg_XPPerMin_zeroToTen_JG_per_min <- mean(Bronze$XPPerMin_zeroToTen_JG/Bronze$PlayedLength_JG,na.rm = TRUE)*60
Avgtable_avg_XPPerMin_zeroToTen_JG_per_min <- cbind(Challenger_avg_XPPerMin_zeroToTen_JG_per_min,Master_avg_XPPerMin_zeroToTen_JG_per_min,Diamond_avg_XPPerMin_zeroToTen_JG_per_min,Plat_avg_XPPerMin_zeroToTen_JG_per_min,Gold_avg_XPPerMin_zeroToTen_JG_per_min,Silver_avg_XPPerMin_zeroToTen_JG_per_min,Bronze_avg_XPPerMin_zeroToTen_JG_per_min)
Avgtable_avg_XPPerMin_zeroToTen_JG_per_min
```
JG XP per min 0-30 min
```{r}
Challenger_avg_XPPerMin_zeroToThirty_JG_per_min <- mean(Challenger$XPPerMin_zeroToThirty_JG/Challenger$PlayedLength_JG,na.rm = TRUE)*60
Master_avg_XPPerMin_zeroToThirty_JG_per_min <- mean(Master$XPPerMin_zeroToThirty_JG/Master$PlayedLength_JG,na.rm = TRUE)*60
Diamond_avg_XPPerMin_zeroToThirty_JG_per_min <- mean(Diamond$XPPerMin_zeroToThirty_JG/Diamond$PlayedLength_JG,na.rm = TRUE)*60
Plat_avg_XPPerMin_zeroToThirty_JG_per_min <- mean(Plat$XPPerMin_zeroToThirty_JG/Plat$PlayedLength_JG,na.rm = TRUE)*60
Gold_avg_XPPerMin_zeroToThirty_JG_per_min <- mean(Gold$XPPerMin_zeroToThirty_JG/Gold$PlayedLength_JG,na.rm = TRUE)*60
Silver_avg_XPPerMin_zeroToThirty_JG_per_min <- mean(Silver$XPPerMin_zeroToThirty_JG/Silver$PlayedLength_JG,na.rm = TRUE)*60
Bronze_avg_XPPerMin_zeroToThirty_JG_per_min <- mean(Bronze$XPPerMin_zeroToThirty_JG/Bronze$PlayedLength_JG,na.rm = TRUE)*60
Avgtable_avg_XPPerMin_zeroToThirty_JG_per_min <- cbind(Challenger_avg_XPPerMin_zeroToThirty_JG_per_min,Master_avg_XPPerMin_zeroToThirty_JG_per_min,Diamond_avg_XPPerMin_zeroToThirty_JG_per_min,Plat_avg_XPPerMin_zeroToThirty_JG_per_min,Gold_avg_XPPerMin_zeroToThirty_JG_per_min,Silver_avg_XPPerMin_zeroToThirty_JG_per_min,Bronze_avg_XPPerMin_zeroToThirty_JG_per_min)
Avgtable_avg_XPPerMin_zeroToThirty_JG_per_min
```
JG XP Difference per min 0-10
```{r}
Challenger_avg_XPDiffPerMin_zeroToTen_JG_per_min <- mean(Challenger$XPDiffPerMin_zeroToTen_JG/Challenger$PlayedLength_JG,na.rm = TRUE)*60
Master_avg_XPDiffPerMin_zeroToTen_JG_per_min <- mean(Master$XPDiffPerMin_zeroToTen_JG/Master$PlayedLength_JG,na.rm = TRUE)*60
Diamond_avg_XPDiffPerMin_zeroToTen_JG_per_min <- mean(Diamond$XPDiffPerMin_zeroToTen_JG/Diamond$PlayedLength_JG,na.rm = TRUE)*60
Plat_avg_XPDiffPerMin_zeroToTen_JG_per_min <- mean(Plat$XPDiffPerMin_zeroToTen_JG/Plat$PlayedLength_JG,na.rm = TRUE)*60
Gold_avg_XPDiffPerMin_zeroToTen_JG_per_min <- mean(Gold$XPDiffPerMin_zeroToTen_JG/Gold$PlayedLength_JG,na.rm = TRUE)*60
Silver_avg_XPDiffPerMin_zeroToTen_JG_per_min <- mean(Silver$XPDiffPerMin_zeroToTen_JG/Silver$PlayedLength_JG,na.rm = TRUE)*60
Bronze_avg_XPDiffPerMin_zeroToTen_JG_per_min <- mean(Bronze$XPDiffPerMin_zeroToTen_JG/Bronze$PlayedLength_JG,na.rm = TRUE)*60
Avgtable_avg_XPDiffPerMin_zeroToTen_JG_per_min <- cbind(Challenger_avg_XPDiffPerMin_zeroToTen_JG_per_min,Master_avg_XPDiffPerMin_zeroToTen_JG_per_min,Diamond_avg_XPDiffPerMin_zeroToTen_JG_per_min,Plat_avg_XPDiffPerMin_zeroToTen_JG_per_min,Gold_avg_XPDiffPerMin_zeroToTen_JG_per_min,Silver_avg_XPDiffPerMin_zeroToTen_JG_per_min,Bronze_avg_XPDiffPerMin_zeroToTen_JG_per_min)
Avgtable_avg_XPDiffPerMin_zeroToTen_JG_per_min
```
JG XP Difference per min 10-20
```{r}
Challenger_avg_XPDiffPerMin_tenToTwenty_JG_per_min <- mean(Challenger$XPDiffPerMin_tenToTwenty_JG/Challenger$PlayedLength_JG,na.rm = TRUE)*60
Master_avg_XPDiffPerMin_tenToTwenty_JG_per_min <- mean(Master$XPDiffPerMin_tenToTwenty_JG/Master$PlayedLength_JG,na.rm = TRUE)*60
Diamond_avg_XPDiffPerMin_tenToTwenty_JG_per_min <- mean(Diamond$XPDiffPerMin_tenToTwenty_JG/Diamond$PlayedLength_JG,na.rm = TRUE)*60
Plat_avg_XPDiffPerMin_tenToTwenty_JG_per_min <- mean(Plat$XPDiffPerMin_tenToTwenty_JG/Plat$PlayedLength_JG,na.rm = TRUE)*60
Gold_avg_XPDiffPerMin_tenToTwenty_JG_per_min <- mean(Gold$XPDiffPerMin_tenToTwenty_JG/Gold$PlayedLength_JG,na.rm = TRUE)*60
Silver_avg_XPDiffPerMin_tenToTwenty_JG_per_min <- mean(Silver$XPDiffPerMin_tenToTwenty_JG/Silver$PlayedLength_JG,na.rm = TRUE)*60
Bronze_avg_XPDiffPerMin_tenToTwenty_JG_per_min <- mean(Bronze$XPDiffPerMin_tenToTwenty_JG/Bronze$PlayedLength_JG,na.rm = TRUE)*60
Avgtable_avg_XPDiffPerMin_tenToTwenty_JG_per_min <- cbind(Challenger_avg_XPDiffPerMin_tenToTwenty_JG_per_min,Master_avg_XPDiffPerMin_tenToTwenty_JG_per_min,Diamond_avg_XPDiffPerMin_tenToTwenty_JG_per_min,Plat_avg_XPDiffPerMin_tenToTwenty_JG_per_min,Gold_avg_XPDiffPerMin_tenToTwenty_JG_per_min,Silver_avg_XPDiffPerMin_tenToTwenty_JG_per_min,Bronze_avg_XPDiffPerMin_tenToTwenty_JG_per_min)
Avgtable_avg_XPDiffPerMin_tenToTwenty_JG_per_min
```
JG XP Difference per min 20-30
```{r}
Challenger_avg_XPDiffPerMin_twentyToThirty_JG_per_min <- mean(Challenger$XPDiffPerMin_twentyToThirty_JG/Challenger$PlayedLength_JG,na.rm = TRUE)*60
Master_avg_XPDiffPerMin_twentyToThirty_JG_per_min <- mean(Master$XPDiffPerMin_twentyToThirty_JG/Master$PlayedLength_JG,na.rm = TRUE)*60
Diamond_avg_XPDiffPerMin_twentyToThirty_JG_per_min <- mean(Diamond$XPDiffPerMin_twentyToThirty_JG/Diamond$PlayedLength_JG,na.rm = TRUE)*60
Plat_avg_XPDiffPerMin_twentyToThirty_JG_per_min <- mean(Plat$XPDiffPerMin_twentyToThirty_JG/Plat$PlayedLength_JG,na.rm = TRUE)*60
Gold_avg_XPDiffPerMin_twentyToThirty_JG_per_min <- mean(Gold$XPDiffPerMin_twentyToThirty_JG/Gold$PlayedLength_JG,na.rm = TRUE)*60
Silver_avg_XPDiffPerMin_twentyToThirty_JG_per_min <- mean(Silver$XPDiffPerMin_twentyToThirty_JG/Silver$PlayedLength_JG,na.rm = TRUE)*60
Bronze_avg_XPDiffPerMin_twentyToThirty_JG_per_min <- mean(Bronze$XPDiffPerMin_twentyToThirty_JG/Bronze$PlayedLength_JG,na.rm = TRUE)*60
Avgtable_avg_XPDiffPerMin_twentyToThirty_JG_per_min <- cbind(Challenger_avg_XPDiffPerMin_twentyToThirty_JG_per_min,Master_avg_XPDiffPerMin_twentyToThirty_JG_per_min,Diamond_avg_XPDiffPerMin_twentyToThirty_JG_per_min,Plat_avg_XPDiffPerMin_twentyToThirty_JG_per_min,Gold_avg_XPDiffPerMin_twentyToThirty_JG_per_min,Silver_avg_XPDiffPerMin_twentyToThirty_JG_per_min,Bronze_avg_XPDiffPerMin_twentyToThirty_JG_per_min)
Avgtable_avg_XPDiffPerMin_twentyToThirty_JG_per_min
```
JG Team Gold Percentage
```{r}
Challenger_TeamGoldPercent_JG <- mean(Challenger$TeamGoldPercent_JG,na.rm = TRUE)
Master_TeamGoldPercent_JG <- mean(Master$TeamGoldPercent_JG,na.rm = TRUE)
Diamond_TeamGoldPercent_JG <- mean(Diamond$TeamGoldPercent_JG,na.rm = TRUE)
Plat_TeamGoldPercent_JG <- mean(Plat$TeamGoldPercent_JG,na.rm = TRUE)
Gold_TeamGoldPercent_JG <- mean(Gold$TeamGoldPercent_JG,na.rm = TRUE)
Silver_TeamGoldPercent_JG <- mean(Silver$TeamGoldPercent_JG,na.rm = TRUE)
Bronze_TeamGoldPercent_JG <- mean(Bronze$TeamGoldPercent_JG,na.rm = TRUE)
AvgTable_TeamGoldPercent_JG <- cbind(Challenger_TeamGoldPercent_JG,Master_TeamGoldPercent_JG,Diamond_TeamGoldPercent_JG,Plat_TeamGoldPercent_JG,Gold_TeamGoldPercent_JG,Silver_TeamGoldPercent_JG,Bronze_TeamGoldPercent_JG)
AvgTable_TeamGoldPercent_JG
```
JG Team Damage Percentage
```{r}
Challenger_TeamDamagePercent_JG <- mean(Challenger$TeamDamagePercent_JG,na.rm = TRUE)
Master_TeamDamagePercent_JG <- mean(Master$TeamDamagePercent_JG,na.rm = TRUE)
Diamond_TeamDamagePercent_JG <- mean(Diamond$TeamDamagePercent_JG,na.rm = TRUE)
Plat_TeamDamagePercent_JG <- mean(Plat$TeamDamagePercent_JG,na.rm = TRUE)
Gold_TeamDamagePercent_JG <- mean(Gold$TeamDamagePercent_JG,na.rm = TRUE)
Silver_TeamDamagePercent_JG <- mean(Silver$TeamDamagePercent_JG,na.rm = TRUE)
Bronze_TeamDamagePercent_JG <- mean(Bronze$TeamDamagePercent_JG,na.rm = TRUE)
AvgTable_TeamDamagePercent_JG <- cbind(Challenger_TeamDamagePercent_JG,Master_TeamDamagePercent_JG,Diamond_TeamDamagePercent_JG,Plat_TeamDamagePercent_JG,Gold_TeamDamagePercent_JG,Silver_TeamDamagePercent_JG,Bronze_TeamDamagePercent_JG)
AvgTable_TeamDamagePercent_JG
```



# SUP
SUP Damage Dealt per minute
```{r}
Challenger_avg_D_SUP_per_min <- mean(Challenger$D_SUP/Challenger$PlayedLength_SUP,na.rm = TRUE)*60
Master_avg_D_SUP_per_min <- mean(Master$D_SUP/Master$PlayedLength_SUP,na.rm = TRUE)*60
Diamond_avg_D_SUP_per_min <- mean(Diamond$D_SUP/Diamond$PlayedLength_SUP,na.rm = TRUE)*60
Plat_avg_D_SUP_per_min <- mean(Plat$D_SUP/Plat$PlayedLength_SUP,na.rm = TRUE)*60
Gold_avg_D_SUP_per_min <- mean(Gold$D_SUP/Gold$PlayedLength_SUP,na.rm = TRUE)*60
Silver_avg_D_SUP_per_min <- mean(Silver$D_SUP/Silver$PlayedLength_SUP,na.rm = TRUE)*60
Bronze_avg_D_SUP_per_min <- mean(Bronze$D_SUP/Bronze$PlayedLength_SUP,na.rm = TRUE)*60
Avgtable_avg_D_SUP_per_min <- cbind(Challenger_avg_D_SUP_per_min,Master_avg_D_SUP_per_min,Diamond_avg_D_SUP_per_min,Plat_avg_D_SUP_per_min,Gold_avg_D_SUP_per_min,Silver_avg_D_SUP_per_min,Bronze_avg_D_SUP_per_min)
Avgtable_avg_D_SUP_per_min
```
SUP Damagen Taken per min
```{r}
Challenger_avg_DT_SUP_per_min <- mean(Challenger$DT_SUP/Challenger$PlayedLength_SUP,na.rm = TRUE)*60
Master_avg_DT_SUP_per_min <- mean(Master$DT_SUP/Master$PlayedLength_SUP,na.rm = TRUE)*60
Diamond_avg_DT_SUP_per_min <- mean(Diamond$DT_SUP/Diamond$PlayedLength_SUP,na.rm = TRUE)*60
Plat_avg_DT_SUP_per_min <- mean(Plat$DT_SUP/Plat$PlayedLength_SUP,na.rm = TRUE)*60
Gold_avg_DT_SUP_per_min <- mean(Gold$DT_SUP/Gold$PlayedLength_SUP,na.rm = TRUE)*60
Silver_avg_DT_SUP_per_min <- mean(Silver$DT_SUP/Silver$PlayedLength_SUP,na.rm = TRUE)*60
Bronze_avg_DT_SUP_per_min <- mean(Bronze$DT_SUP/Bronze$PlayedLength_SUP,na.rm = TRUE)*60
Avgtable_avg_DT_SUP_per_min <- cbind(Challenger_avg_DT_SUP_per_min,Master_avg_DT_SUP_per_min,Diamond_avg_DT_SUP_per_min,Plat_avg_DT_SUP_per_min,Gold_avg_DT_SUP_per_min,Silver_avg_DT_SUP_per_min,Bronze_avg_DT_SUP_per_min)
Avgtable_avg_DT_SUP_per_min
```
SUP CS in first 10 mins
```{r}
Challenger_CS_zeroToTen_SUP <- mean(Challenger$CS_zeroToTen_SUP,na.rm = TRUE)
Master_CS_zeroToTen_SUP <- mean(Master$CS_zeroToTen_SUP,na.rm = TRUE)
Diamond_CS_zeroToTen_SUP <- mean(Diamond$CS_zeroToTen_SUP,na.rm = TRUE)
Plat_CS_zeroToTen_SUP <- mean(Plat$CS_zeroToTen_SUP,na.rm = TRUE)
Gold_CS_zeroToTen_SUP <- mean(Gold$CS_zeroToTen_SUP,na.rm = TRUE)
Silver_CS_zeroToTen_SUP <- mean(Silver$CS_zeroToTen_SUP,na.rm = TRUE)
Bronze_CS_zeroToTen_SUP <- mean(Bronze$CS_zeroToTen_SUP,na.rm = TRUE)
AvgTable_CS_zeroToTen_SUP <- cbind(Challenger_CS_zeroToTen_SUP,Master_CS_zeroToTen_SUP,Diamond_CS_zeroToTen_SUP,Plat_CS_zeroToTen_SUP,Gold_CS_zeroToTen_SUP,Silver_CS_zeroToTen_SUP,Bronze_CS_zeroToTen_SUP)
AvgTable_CS_zeroToTen_SUP
```
SUP CS per min
```{r}
Challenger_avg_CS_SUP_per_min <- mean(Challenger$CS_SUP/Challenger$PlayedLength_SUP,na.rm = TRUE)*60
Master_avg_CS_SUP_per_min <- mean(Master$CS_SUP/Master$PlayedLength_SUP,na.rm = TRUE)*60
Diamond_avg_CS_SUP_per_min <- mean(Diamond$CS_SUP/Diamond$PlayedLength_SUP,na.rm = TRUE)*60
Plat_avg_CS_SUP_per_min <- mean(Plat$CS_SUP/Plat$PlayedLength_SUP,na.rm = TRUE)*60
Gold_avg_CS_SUP_per_min <- mean(Gold$CS_SUP/Gold$PlayedLength_SUP,na.rm = TRUE)*60
Silver_avg_CS_SUP_per_min <- mean(Silver$CS_SUP/Silver$PlayedLength_SUP,na.rm = TRUE)*60
Bronze_avg_CS_SUP_per_min <- mean(Bronze$CS_SUP/Bronze$PlayedLength_SUP,na.rm = TRUE)*60
AvgTable_avg_CS_SUP_per_min <- cbind(Challenger_avg_CS_SUP_per_min,Master_avg_CS_SUP_per_min,Diamond_avg_CS_SUP_per_min,Plat_avg_CS_SUP_per_min,Gold_avg_CS_SUP_per_min,Silver_avg_CS_SUP_per_min,Bronze_avg_CS_SUP_per_min)
AvgTable_avg_CS_SUP_per_min
```
SUP Healing per min
```{r}
Challenger_avg_H_SUP_per_min <- mean(Challenger$H_SUP/Challenger$PlayedLength_SUP,na.rm = TRUE)*60
Master_avg_H_SUP_per_min <- mean(Master$H_SUP/Master$PlayedLength_SUP,na.rm = TRUE)*60
Diamond_avg_H_SUP_per_min <- mean(Diamond$H_SUP/Diamond$PlayedLength_SUP,na.rm = TRUE)*60
Plat_avg_H_SUP_per_min <- mean(Plat$H_SUP/Plat$PlayedLength_SUP,na.rm = TRUE)*60
Gold_avg_H_SUP_per_min <- mean(Gold$H_SUP/Gold$PlayedLength_SUP,na.rm = TRUE)*60
Silver_avg_H_SUP_per_min <- mean(Silver$H_SUP/Silver$PlayedLength_SUP,na.rm = TRUE)*60
Bronze_avg_H_SUP_per_min <- mean(Bronze$H_SUP/Bronze$PlayedLength_SUP,na.rm = TRUE)*60
Avgtable_avg_H_SUP_per_min <- cbind(Challenger_avg_H_SUP_per_min,Master_avg_H_SUP_per_min,Diamond_avg_H_SUP_per_min,Plat_avg_H_SUP_per_min,Gold_avg_H_SUP_per_min,Silver_avg_H_SUP_per_min,Bronze_avg_H_SUP_per_min)
Avgtable_avg_H_SUP_per_min
```
SUP Gold per min
```{r}
Challenger_avg_G_SUP_per_min <- mean(Challenger$G_SUP/Challenger$PlayedLength_SUP,na.rm = TRUE)*60
Master_avg_G_SUP_per_min <- mean(Master$G_SUP/Master$PlayedLength_SUP,na.rm = TRUE)*60
Diamond_avg_G_SUP_per_min <- mean(Diamond$G_SUP/Diamond$PlayedLength_SUP,na.rm = TRUE)*60
Plat_avg_G_SUP_per_min <- mean(Plat$G_SUP/Plat$PlayedLength_SUP,na.rm = TRUE)*60
Gold_avg_G_SUP_per_min <- mean(Gold$G_SUP/Gold$PlayedLength_SUP,na.rm = TRUE)*60
Silver_avg_G_SUP_per_min <- mean(Silver$G_SUP/Silver$PlayedLength_SUP,na.rm = TRUE)*60
Bronze_avg_G_SUP_per_min <- mean(Bronze$G_SUP/Bronze$PlayedLength_SUP,na.rm = TRUE)*60
Avgtable_avg_G_SUP_per_min <- cbind(Challenger_avg_G_SUP_per_min,Master_avg_G_SUP_per_min,Diamond_avg_G_SUP_per_min,Plat_avg_G_SUP_per_min,Gold_avg_G_SUP_per_min,Silver_avg_G_SUP_per_min,Bronze_avg_G_SUP_per_min)
Avgtable_avg_G_SUP_per_min
```
SUP Kill per min
```{r}
Challenger_avg_K_SUP_per_min <- mean(Challenger$K_SUP/Challenger$PlayedLength_SUP,na.rm = TRUE)*60
Master_avg_K_SUP_per_min <- mean(Master$K_SUP/Master$PlayedLength_SUP,na.rm = TRUE)*60
Diamond_avg_K_SUP_per_min <- mean(Diamond$K_SUP/Diamond$PlayedLength_SUP,na.rm = TRUE)*60
Plat_avg_K_SUP_per_min <- mean(Plat$K_SUP/Plat$PlayedLength_SUP,na.rm = TRUE)*60
Gold_avg_K_SUP_per_min <- mean(Gold$K_SUP/Gold$PlayedLength_SUP,na.rm = TRUE)*60
Silver_avg_K_SUP_per_min <- mean(Silver$K_SUP/Silver$PlayedLength_SUP,na.rm = TRUE)*60
Bronze_avg_K_SUP_per_min <- mean(Bronze$K_SUP/Bronze$PlayedLength_SUP,na.rm = TRUE)*60
Avgtable_avg_K_SUP_per_min <- cbind(Challenger_avg_K_SUP_per_min,Master_avg_K_SUP_per_min,Diamond_avg_K_SUP_per_min,Plat_avg_K_SUP_per_min,Gold_avg_K_SUP_per_min,Silver_avg_K_SUP_per_min,Bronze_avg_K_SUP_per_min)
Avgtable_avg_K_SUP_per_min
```
SUP Death per min
```{r}
Challenger_avg_De_SUP_per_min <- mean(Challenger$De_SUP/Challenger$PlayedLength_SUP,na.rm = TRUE)*60
Master_avg_De_SUP_per_min <- mean(Master$De_SUP/Master$PlayedLength_SUP,na.rm = TRUE)*60
Diamond_avg_De_SUP_per_min <- mean(Diamond$De_SUP/Diamond$PlayedLength_SUP,na.rm = TRUE)*60
Plat_avg_De_SUP_per_min <- mean(Plat$De_SUP/Plat$PlayedLength_SUP,na.rm = TRUE)*60
Gold_avg_De_SUP_per_min <- mean(Gold$De_SUP/Gold$PlayedLength_SUP,na.rm = TRUE)*60
Silver_avg_De_SUP_per_min <- mean(Silver$De_SUP/Silver$PlayedLength_SUP,na.rm = TRUE)*60
Bronze_avg_De_SUP_per_min <- mean(Bronze$De_SUP/Bronze$PlayedLength_SUP,na.rm = TRUE)*60
Avgtable_avg_De_SUP_per_min <- cbind(Challenger_avg_De_SUP_per_min,Master_avg_De_SUP_per_min,Diamond_avg_De_SUP_per_min,Plat_avg_De_SUP_per_min,Gold_avg_De_SUP_per_min,Silver_avg_De_SUP_per_min,Bronze_avg_De_SUP_per_min)
Avgtable_avg_De_SUP_per_min
```
SUP Assist per min
```{r}
Challenger_avg_A_SUP_per_min <- mean(Challenger$A_SUP/Challenger$PlayedLength_SUP,na.rm = TRUE)*60
Master_avg_A_SUP_per_min <- mean(Master$A_SUP/Master$PlayedLength_SUP,na.rm = TRUE)*60
Diamond_avg_A_SUP_per_min <- mean(Diamond$A_SUP/Diamond$PlayedLength_SUP,na.rm = TRUE)*60
Plat_avg_A_SUP_per_min <- mean(Plat$A_SUP/Plat$PlayedLength_SUP,na.rm = TRUE)*60
Gold_avg_A_SUP_per_min <- mean(Gold$A_SUP/Gold$PlayedLength_SUP,na.rm = TRUE)*60
Silver_avg_A_SUP_per_min <- mean(Silver$A_SUP/Silver$PlayedLength_SUP,na.rm = TRUE)*60
Bronze_avg_A_SUP_per_min <- mean(Bronze$A_SUP/Bronze$PlayedLength_SUP,na.rm = TRUE)*60
Avgtable_avg_A_SUP_per_min <- cbind(Challenger_avg_A_SUP_per_min,Master_avg_A_SUP_per_min,Diamond_avg_A_SUP_per_min,Plat_avg_A_SUP_per_min,Gold_avg_A_SUP_per_min,Silver_avg_A_SUP_per_min,Bronze_avg_A_SUP_per_min)
Avgtable_avg_A_SUP_per_min
```
SUP Vision Ward per min
```{r}
Challenger_avg_VW_SUP_per_min <- mean(Challenger$VW_SUP/Challenger$PlayedLength_SUP,na.rm = TRUE)*60
Master_avg_VW_SUP_per_min <- mean(Master$VW_SUP/Master$PlayedLength_SUP,na.rm = TRUE)*60
Diamond_avg_VW_SUP_per_min <- mean(Diamond$VW_SUP/Diamond$PlayedLength_SUP,na.rm = TRUE)*60
Plat_avg_VW_SUP_per_min <- mean(Plat$VW_SUP/Plat$PlayedLength_SUP,na.rm = TRUE)*60
Gold_avg_VW_SUP_per_min <- mean(Gold$VW_SUP/Gold$PlayedLength_SUP,na.rm = TRUE)*60
Silver_avg_VW_SUP_per_min <- mean(Silver$VW_SUP/Silver$PlayedLength_SUP,na.rm = TRUE)*60
Bronze_avg_VW_SUP_per_min <- mean(Bronze$VW_SUP/Bronze$PlayedLength_SUP,na.rm = TRUE)*60
Avgtable_avg_VW_SUP_per_min <- cbind(Challenger_avg_VW_SUP_per_min,Master_avg_VW_SUP_per_min,Diamond_avg_VW_SUP_per_min,Plat_avg_VW_SUP_per_min,Gold_avg_VW_SUP_per_min,Silver_avg_VW_SUP_per_min,Bronze_avg_VW_SUP_per_min)
Avgtable_avg_VW_SUP_per_min
```
SUP Wards Kill per min
```{r}
Challenger_avg_WK_SUP_per_min <- mean(Challenger$WK_SUP/Challenger$PlayedLength_SUP,na.rm = TRUE)*60
Master_avg_WK_SUP_per_min <- mean(Master$WK_SUP/Master$PlayedLength_SUP,na.rm = TRUE)*60
Diamond_avg_WK_SUP_per_min <- mean(Diamond$WK_SUP/Diamond$PlayedLength_SUP,na.rm = TRUE)*60
Plat_avg_WK_SUP_per_min <- mean(Plat$WK_SUP/Plat$PlayedLength_SUP,na.rm = TRUE)*60
Gold_avg_WK_SUP_per_min <- mean(Gold$WK_SUP/Gold$PlayedLength_SUP,na.rm = TRUE)*60
Silver_avg_WK_SUP_per_min <- mean(Silver$WK_SUP/Silver$PlayedLength_SUP,na.rm = TRUE)*60
Bronze_avg_WK_SUP_per_min <- mean(Bronze$WK_SUP/Bronze$PlayedLength_SUP,na.rm = TRUE)*60
Avgtable_avg_WK_SUP_per_min <- cbind(Challenger_avg_WK_SUP_per_min,Master_avg_WK_SUP_per_min,Diamond_avg_WK_SUP_per_min,Plat_avg_WK_SUP_per_min,Gold_avg_WK_SUP_per_min,Silver_avg_WK_SUP_per_min,Bronze_avg_WK_SUP_per_min)
Avgtable_avg_WK_SUP_per_min
```
SUP Wards Placed per min
```{r}
Challenger_avg_WP_SUP_per_min <- mean(Challenger$WP_SUP/Challenger$PlayedLength_SUP,na.rm = TRUE)*60
Master_avg_WP_SUP_per_min <- mean(Master$WP_SUP/Master$PlayedLength_SUP,na.rm = TRUE)*60
Diamond_avg_WP_SUP_per_min <- mean(Diamond$WP_SUP/Diamond$PlayedLength_SUP,na.rm = TRUE)*60
Plat_avg_WP_SUP_per_min <- mean(Plat$WP_SUP/Plat$PlayedLength_SUP,na.rm = TRUE)*60
Gold_avg_WP_SUP_per_min <- mean(Gold$WP_SUP/Gold$PlayedLength_SUP,na.rm = TRUE)*60
Silver_avg_WP_SUP_per_min <- mean(Silver$WP_SUP/Silver$PlayedLength_SUP,na.rm = TRUE)*60
Bronze_avg_WP_SUP_per_min <- mean(Bronze$WP_SUP/Bronze$PlayedLength_SUP,na.rm = TRUE)*60
Avgtable_avg_WP_SUP_per_min <- cbind(Challenger_avg_WP_SUP_per_min,Master_avg_WP_SUP_per_min,Diamond_avg_WP_SUP_per_min,Plat_avg_WP_SUP_per_min,Gold_avg_WP_SUP_per_min,Silver_avg_WP_SUP_per_min,Bronze_avg_WP_SUP_per_min)
Avgtable_avg_WP_SUP_per_min
```
SUP Kill Contribution
```{r}
Challenger_KC_SUP <- mean(Challenger$KC_SUP,na.rm = TRUE)
Master_KC_SUP <- mean(Master$KC_SUP,na.rm = TRUE)
Diamond_KC_SUP <- mean(Diamond$KC_SUP,na.rm = TRUE)
Plat_KC_SUP <- mean(Plat$KC_SUP,na.rm = TRUE)
Gold_KC_SUP <- mean(Gold$KC_SUP,na.rm = TRUE)
Silver_KC_SUP <- mean(Silver$KC_SUP,na.rm = TRUE)
Bronze_KC_SUP <- mean(Bronze$KC_SUP,na.rm = TRUE)
AvgTable_KC_SUP <- cbind(Challenger_KC_SUP,Master_KC_SUP,Diamond_KC_SUP,Plat_KC_SUP,Gold_KC_SUP,Silver_KC_SUP,Bronze_KC_SUP)
AvgTable_KC_SUP
```
SUP KDA
```{r}
Challenger_KDA_SUP <- mean(Challenger$KDA_SUP,na.rm = TRUE)
Master_KDA_SUP <- mean(Master$KDA_SUP,na.rm = TRUE)
Diamond_KDA_SUP <- mean(Diamond$KDA_SUP,na.rm = TRUE)
Plat_KDA_SUP <- mean(Plat$KDA_SUP,na.rm = TRUE)
Gold_KDA_SUP <- mean(Gold$KDA_SUP,na.rm = TRUE)
Silver_KDA_SUP <- mean(Silver$KDA_SUP,na.rm = TRUE)
Bronze_KDA_SUP <- mean(Bronze$KDA_SUP,na.rm = TRUE)
AvgTable_KDA_SUP <- cbind(Challenger_KDA_SUP,Master_KDA_SUP,Diamond_KDA_SUP,Plat_KDA_SUP,Gold_KDA_SUP,Silver_KDA_SUP,Bronze_KDA_SUP)
AvgTable_KDA_SUP
```
SUP WinRate
```{r}
Challenger_WinRate_SUP <- mean(Challenger$WinRate_SUP,na.rm = TRUE)
Master_WinRate_SUP <- mean(Master$WinRate_SUP,na.rm = TRUE)
Diamond_WinRate_SUP <- mean(Diamond$WinRate_SUP,na.rm = TRUE)
Plat_WinRate_SUP <- mean(Plat$WinRate_SUP,na.rm = TRUE)
Gold_WinRate_SUP <- mean(Gold$WinRate_SUP,na.rm = TRUE)
Silver_WinRate_SUP <- mean(Silver$WinRate_SUP,na.rm = TRUE)
Bronze_WinRate_SUP <- mean(Bronze$WinRate_SUP,na.rm = TRUE)
AvgTable_WinRate_SUP <- cbind(Challenger_WinRate_SUP,Master_WinRate_SUP,Diamond_WinRate_SUP,Plat_WinRate_SUP,Gold_WinRate_SUP,Silver_WinRate_SUP,Bronze_WinRate_SUP)
AvgTable_WinRate_SUP
```
SUP CC per min
```{r}
Challenger_avg_CC_SUP_per_min <- mean(Challenger$CC_SUP/Challenger$PlayedLength_SUP,na.rm = TRUE)*60
Master_avg_CC_SUP_per_min <- mean(Master$CC_SUP/Master$PlayedLength_SUP,na.rm = TRUE)*60
Diamond_avg_CC_SUP_per_min <- mean(Diamond$CC_SUP/Diamond$PlayedLength_SUP,na.rm = TRUE)*60
Plat_avg_CC_SUP_per_min <- mean(Plat$CC_SUP/Plat$PlayedLength_SUP,na.rm = TRUE)*60
Gold_avg_CC_SUP_per_min <- mean(Gold$CC_SUP/Gold$PlayedLength_SUP,na.rm = TRUE)*60
Silver_avg_CC_SUP_per_min <- mean(Silver$CC_SUP/Silver$PlayedLength_SUP,na.rm = TRUE)*60
Bronze_avg_CC_SUP_per_min <- mean(Bronze$CC_SUP/Bronze$PlayedLength_SUP,na.rm = TRUE)*60
Avgtable_avg_CC_SUP_per_min <- cbind(Challenger_avg_CC_SUP_per_min,Master_avg_CC_SUP_per_min,Diamond_avg_CC_SUP_per_min,Plat_avg_CC_SUP_per_min,Gold_avg_CC_SUP_per_min,Silver_avg_CC_SUP_per_min,Bronze_avg_CC_SUP_per_min)
Avgtable_avg_CC_SUP_per_min
```
SUP FB Contribution
```{r}
Challenger_FBContribution_SUP <- mean(Challenger$FBContribution_SUP,na.rm = TRUE)
Master_FBContribution_SUP <- mean(Master$FBContribution_SUP,na.rm = TRUE)
Diamond_FBContribution_SUP <- mean(Diamond$FBContribution_SUP,na.rm = TRUE)
Plat_FBContribution_SUP <- mean(Plat$FBContribution_SUP,na.rm = TRUE)
Gold_FBContribution_SUP <- mean(Gold$FBContribution_SUP,na.rm = TRUE)
Silver_FBContribution_SUP <- mean(Silver$FBContribution_SUP,na.rm = TRUE)
Bronze_FBContribution_SUP <- mean(Bronze$FBContribution_SUP,na.rm = TRUE)
AvgTable_FBContribution_SUP <- cbind(Challenger_FBContribution_SUP,Master_FBContribution_SUP,Diamond_FBContribution_SUP,Plat_FBContribution_SUP,Gold_FBContribution_SUP,Silver_FBContribution_SUP,Bronze_FBContribution_SUP)
AvgTable_FBContribution_SUP
```
SUP Killing Sprees
```{r}
Challenger_KillSprees_SUP <- mean(Challenger$KillSprees_SUP,na.rm = TRUE)
Master_KillSprees_SUP <- mean(Master$KillSprees_SUP,na.rm = TRUE)
Diamond_KillSprees_SUP <- mean(Diamond$KillSprees_SUP,na.rm = TRUE)
Plat_KillSprees_SUP <- mean(Plat$KillSprees_SUP,na.rm = TRUE)
Gold_KillSprees_SUP <- mean(Gold$KillSprees_SUP,na.rm = TRUE)
Silver_KillSprees_SUP <- mean(Silver$KillSprees_SUP,na.rm = TRUE)
Bronze_KillSprees_SUP <- mean(Bronze$KillSprees_SUP,na.rm = TRUE)
AvgTable_KillSprees_SUP <- cbind(Challenger_KillSprees_SUP,Master_KillSprees_SUP,Diamond_KillSprees_SUP,Plat_KillSprees_SUP,Gold_KillSprees_SUP,Silver_KillSprees_SUP,Bronze_KillSprees_SUP)
AvgTable_KillSprees_SUP
```
SUP Largest Killing Sprees
```{r}
Challenger_LargestKillingSpree_SUP <- mean(Challenger$LargestKillingSpree_SUP,na.rm = TRUE)
Master_LargestKillingSpree_SUP <- mean(Master$LargestKillingSpree_SUP,na.rm = TRUE)
Diamond_LargestKillingSpree_SUP <- mean(Diamond$LargestKillingSpree_SUP,na.rm = TRUE)
Plat_LargestKillingSpree_SUP <- mean(Plat$LargestKillingSpree_SUP,na.rm = TRUE)
Gold_LargestKillingSpree_SUP <- mean(Gold$LargestKillingSpree_SUP,na.rm = TRUE)
Silver_LargestKillingSpree_SUP <- mean(Silver$LargestKillingSpree_SUP,na.rm = TRUE)
Bronze_LargestKillingSpree_SUP <- mean(Bronze$LargestKillingSpree_SUP,na.rm = TRUE)
AvgTable_LargestKillingSpree_SUP <- cbind(Challenger_LargestKillingSpree_SUP,Master_LargestKillingSpree_SUP,Diamond_LargestKillingSpree_SUP,Plat_LargestKillingSpree_SUP,Gold_LargestKillingSpree_SUP,Silver_LargestKillingSpree_SUP,Bronze_LargestKillingSpree_SUP)
AvgTable_LargestKillingSpree_SUP
```
SUP CS Difference per min 0-10 min
```{r}
Challenger_avg_CSDiffPerMin_zeroToTen_SUP_per_min <- mean(Challenger$CSDiffPerMin_zeroToTen_SUP/Challenger$PlayedLength_SUP,na.rm = TRUE)*60
Master_avg_CSDiffPerMin_zeroToTen_SUP_per_min <- mean(Master$CSDiffPerMin_zeroToTen_SUP/Master$PlayedLength_SUP,na.rm = TRUE)*60
Diamond_avg_CSDiffPerMin_zeroToTen_SUP_per_min <- mean(Diamond$CSDiffPerMin_zeroToTen_SUP/Diamond$PlayedLength_SUP,na.rm = TRUE)*60
Plat_avg_CSDiffPerMin_zeroToTen_SUP_per_min <- mean(Plat$CSDiffPerMin_zeroToTen_SUP/Plat$PlayedLength_SUP,na.rm = TRUE)*60
Gold_avg_CSDiffPerMin_zeroToTen_SUP_per_min <- mean(Gold$CSDiffPerMin_zeroToTen_SUP/Gold$PlayedLength_SUP,na.rm = TRUE)*60
Silver_avg_CSDiffPerMin_zeroToTen_SUP_per_min <- mean(Silver$CSDiffPerMin_zeroToTen_SUP/Silver$PlayedLength_SUP,na.rm = TRUE)*60
Bronze_avg_CSDiffPerMin_zeroToTen_SUP_per_min <- mean(Bronze$CSDiffPerMin_zeroToTen_SUP/Bronze$PlayedLength_SUP,na.rm = TRUE)*60
Avgtable_avg_CSDiffPerMin_zeroToTen_SUP_per_min <- cbind(Challenger_avg_CSDiffPerMin_zeroToTen_SUP_per_min,Master_avg_CSDiffPerMin_zeroToTen_SUP_per_min,Diamond_avg_CSDiffPerMin_zeroToTen_SUP_per_min,Plat_avg_CSDiffPerMin_zeroToTen_SUP_per_min,Gold_avg_CSDiffPerMin_zeroToTen_SUP_per_min,Silver_avg_CSDiffPerMin_zeroToTen_SUP_per_min,Bronze_avg_CSDiffPerMin_zeroToTen_SUP_per_min)
Avgtable_avg_CSDiffPerMin_zeroToTen_SUP_per_min
```
SUP XP per min 0-10 min
```{r}
Challenger_avg_XPPerMin_zeroToTen_SUP_per_min <- mean(Challenger$XPPerMin_zeroToTen_SUP/Challenger$PlayedLength_SUP,na.rm = TRUE)*60
Master_avg_XPPerMin_zeroToTen_SUP_per_min <- mean(Master$XPPerMin_zeroToTen_SUP/Master$PlayedLength_SUP,na.rm = TRUE)*60
Diamond_avg_XPPerMin_zeroToTen_SUP_per_min <- mean(Diamond$XPPerMin_zeroToTen_SUP/Diamond$PlayedLength_SUP,na.rm = TRUE)*60
Plat_avg_XPPerMin_zeroToTen_SUP_per_min <- mean(Plat$XPPerMin_zeroToTen_SUP/Plat$PlayedLength_SUP,na.rm = TRUE)*60
Gold_avg_XPPerMin_zeroToTen_SUP_per_min <- mean(Gold$XPPerMin_zeroToTen_SUP/Gold$PlayedLength_SUP,na.rm = TRUE)*60
Silver_avg_XPPerMin_zeroToTen_SUP_per_min <- mean(Silver$XPPerMin_zeroToTen_SUP/Silver$PlayedLength_SUP,na.rm = TRUE)*60
Bronze_avg_XPPerMin_zeroToTen_SUP_per_min <- mean(Bronze$XPPerMin_zeroToTen_SUP/Bronze$PlayedLength_SUP,na.rm = TRUE)*60
Avgtable_avg_XPPerMin_zeroToTen_SUP_per_min <- cbind(Challenger_avg_XPPerMin_zeroToTen_SUP_per_min,Master_avg_XPPerMin_zeroToTen_SUP_per_min,Diamond_avg_XPPerMin_zeroToTen_SUP_per_min,Plat_avg_XPPerMin_zeroToTen_SUP_per_min,Gold_avg_XPPerMin_zeroToTen_SUP_per_min,Silver_avg_XPPerMin_zeroToTen_SUP_per_min,Bronze_avg_XPPerMin_zeroToTen_SUP_per_min)
Avgtable_avg_XPPerMin_zeroToTen_SUP_per_min
```
SUP XP per min 0-30 min
```{r}
Challenger_avg_XPPerMin_zeroToThirty_SUP_per_min <- mean(Challenger$XPPerMin_zeroToThirty_SUP/Challenger$PlayedLength_SUP,na.rm = TRUE)*60
Master_avg_XPPerMin_zeroToThirty_SUP_per_min <- mean(Master$XPPerMin_zeroToThirty_SUP/Master$PlayedLength_SUP,na.rm = TRUE)*60
Diamond_avg_XPPerMin_zeroToThirty_SUP_per_min <- mean(Diamond$XPPerMin_zeroToThirty_SUP/Diamond$PlayedLength_SUP,na.rm = TRUE)*60
Plat_avg_XPPerMin_zeroToThirty_SUP_per_min <- mean(Plat$XPPerMin_zeroToThirty_SUP/Plat$PlayedLength_SUP,na.rm = TRUE)*60
Gold_avg_XPPerMin_zeroToThirty_SUP_per_min <- mean(Gold$XPPerMin_zeroToThirty_SUP/Gold$PlayedLength_SUP,na.rm = TRUE)*60
Silver_avg_XPPerMin_zeroToThirty_SUP_per_min <- mean(Silver$XPPerMin_zeroToThirty_SUP/Silver$PlayedLength_SUP,na.rm = TRUE)*60
Bronze_avg_XPPerMin_zeroToThirty_SUP_per_min <- mean(Bronze$XPPerMin_zeroToThirty_SUP/Bronze$PlayedLength_SUP,na.rm = TRUE)*60
Avgtable_avg_XPPerMin_zeroToThirty_SUP_per_min <- cbind(Challenger_avg_XPPerMin_zeroToThirty_SUP_per_min,Master_avg_XPPerMin_zeroToThirty_SUP_per_min,Diamond_avg_XPPerMin_zeroToThirty_SUP_per_min,Plat_avg_XPPerMin_zeroToThirty_SUP_per_min,Gold_avg_XPPerMin_zeroToThirty_SUP_per_min,Silver_avg_XPPerMin_zeroToThirty_SUP_per_min,Bronze_avg_XPPerMin_zeroToThirty_SUP_per_min)
Avgtable_avg_XPPerMin_zeroToThirty_SUP_per_min
```
SUP XP Difference per min 0-10
```{r}
Challenger_avg_XPDiffPerMin_zeroToTen_SUP_per_min <- mean(Challenger$XPDiffPerMin_zeroToTen_SUP/Challenger$PlayedLength_SUP,na.rm = TRUE)*60
Master_avg_XPDiffPerMin_zeroToTen_SUP_per_min <- mean(Master$XPDiffPerMin_zeroToTen_SUP/Master$PlayedLength_SUP,na.rm = TRUE)*60
Diamond_avg_XPDiffPerMin_zeroToTen_SUP_per_min <- mean(Diamond$XPDiffPerMin_zeroToTen_SUP/Diamond$PlayedLength_SUP,na.rm = TRUE)*60
Plat_avg_XPDiffPerMin_zeroToTen_SUP_per_min <- mean(Plat$XPDiffPerMin_zeroToTen_SUP/Plat$PlayedLength_SUP,na.rm = TRUE)*60
Gold_avg_XPDiffPerMin_zeroToTen_SUP_per_min <- mean(Gold$XPDiffPerMin_zeroToTen_SUP/Gold$PlayedLength_SUP,na.rm = TRUE)*60
Silver_avg_XPDiffPerMin_zeroToTen_SUP_per_min <- mean(Silver$XPDiffPerMin_zeroToTen_SUP/Silver$PlayedLength_SUP,na.rm = TRUE)*60
Bronze_avg_XPDiffPerMin_zeroToTen_SUP_per_min <- mean(Bronze$XPDiffPerMin_zeroToTen_SUP/Bronze$PlayedLength_SUP,na.rm = TRUE)*60
Avgtable_avg_XPDiffPerMin_zeroToTen_SUP_per_min <- cbind(Challenger_avg_XPDiffPerMin_zeroToTen_SUP_per_min,Master_avg_XPDiffPerMin_zeroToTen_SUP_per_min,Diamond_avg_XPDiffPerMin_zeroToTen_SUP_per_min,Plat_avg_XPDiffPerMin_zeroToTen_SUP_per_min,Gold_avg_XPDiffPerMin_zeroToTen_SUP_per_min,Silver_avg_XPDiffPerMin_zeroToTen_SUP_per_min,Bronze_avg_XPDiffPerMin_zeroToTen_SUP_per_min)
Avgtable_avg_XPDiffPerMin_zeroToTen_SUP_per_min
```
SUP XP Difference per min 10-20
```{r}
Challenger_avg_XPDiffPerMin_tenToTwenty_SUP_per_min <- mean(Challenger$XPDiffPerMin_tenToTwenty_SUP/Challenger$PlayedLength_SUP,na.rm = TRUE)*60
Master_avg_XPDiffPerMin_tenToTwenty_SUP_per_min <- mean(Master$XPDiffPerMin_tenToTwenty_SUP/Master$PlayedLength_SUP,na.rm = TRUE)*60
Diamond_avg_XPDiffPerMin_tenToTwenty_SUP_per_min <- mean(Diamond$XPDiffPerMin_tenToTwenty_SUP/Diamond$PlayedLength_SUP,na.rm = TRUE)*60
Plat_avg_XPDiffPerMin_tenToTwenty_SUP_per_min <- mean(Plat$XPDiffPerMin_tenToTwenty_SUP/Plat$PlayedLength_SUP,na.rm = TRUE)*60
Gold_avg_XPDiffPerMin_tenToTwenty_SUP_per_min <- mean(Gold$XPDiffPerMin_tenToTwenty_SUP/Gold$PlayedLength_SUP,na.rm = TRUE)*60
Silver_avg_XPDiffPerMin_tenToTwenty_SUP_per_min <- mean(Silver$XPDiffPerMin_tenToTwenty_SUP/Silver$PlayedLength_SUP,na.rm = TRUE)*60
Bronze_avg_XPDiffPerMin_tenToTwenty_SUP_per_min <- mean(Bronze$XPDiffPerMin_tenToTwenty_SUP/Bronze$PlayedLength_SUP,na.rm = TRUE)*60
Avgtable_avg_XPDiffPerMin_tenToTwenty_SUP_per_min <- cbind(Challenger_avg_XPDiffPerMin_tenToTwenty_SUP_per_min,Master_avg_XPDiffPerMin_tenToTwenty_SUP_per_min,Diamond_avg_XPDiffPerMin_tenToTwenty_SUP_per_min,Plat_avg_XPDiffPerMin_tenToTwenty_SUP_per_min,Gold_avg_XPDiffPerMin_tenToTwenty_SUP_per_min,Silver_avg_XPDiffPerMin_tenToTwenty_SUP_per_min,Bronze_avg_XPDiffPerMin_tenToTwenty_SUP_per_min)
Avgtable_avg_XPDiffPerMin_tenToTwenty_SUP_per_min
```
SUP XP Difference per min 20-30
```{r}
Challenger_avg_XPDiffPerMin_twentyToThirty_SUP_per_min <- mean(Challenger$XPDiffPerMin_twentyToThirty_SUP/Challenger$PlayedLength_SUP,na.rm = TRUE)*60
Master_avg_XPDiffPerMin_twentyToThirty_SUP_per_min <- mean(Master$XPDiffPerMin_twentyToThirty_SUP/Master$PlayedLength_SUP,na.rm = TRUE)*60
Diamond_avg_XPDiffPerMin_twentyToThirty_SUP_per_min <- mean(Diamond$XPDiffPerMin_twentyToThirty_SUP/Diamond$PlayedLength_SUP,na.rm = TRUE)*60
Plat_avg_XPDiffPerMin_twentyToThirty_SUP_per_min <- mean(Plat$XPDiffPerMin_twentyToThirty_SUP/Plat$PlayedLength_SUP,na.rm = TRUE)*60
Gold_avg_XPDiffPerMin_twentyToThirty_SUP_per_min <- mean(Gold$XPDiffPerMin_twentyToThirty_SUP/Gold$PlayedLength_SUP,na.rm = TRUE)*60
Silver_avg_XPDiffPerMin_twentyToThirty_SUP_per_min <- mean(Silver$XPDiffPerMin_twentyToThirty_SUP/Silver$PlayedLength_SUP,na.rm = TRUE)*60
Bronze_avg_XPDiffPerMin_twentyToThirty_SUP_per_min <- mean(Bronze$XPDiffPerMin_twentyToThirty_SUP/Bronze$PlayedLength_SUP,na.rm = TRUE)*60
Avgtable_avg_XPDiffPerMin_twentyToThirty_SUP_per_min <- cbind(Challenger_avg_XPDiffPerMin_twentyToThirty_SUP_per_min,Master_avg_XPDiffPerMin_twentyToThirty_SUP_per_min,Diamond_avg_XPDiffPerMin_twentyToThirty_SUP_per_min,Plat_avg_XPDiffPerMin_twentyToThirty_SUP_per_min,Gold_avg_XPDiffPerMin_twentyToThirty_SUP_per_min,Silver_avg_XPDiffPerMin_twentyToThirty_SUP_per_min,Bronze_avg_XPDiffPerMin_twentyToThirty_SUP_per_min)
Avgtable_avg_XPDiffPerMin_twentyToThirty_SUP_per_min
```
SUP Team Gold Percentage
```{r}
Challenger_TeamGoldPercent_SUP <- mean(Challenger$TeamGoldPercent_SUP,na.rm = TRUE)
Master_TeamGoldPercent_SUP <- mean(Master$TeamGoldPercent_SUP,na.rm = TRUE)
Diamond_TeamGoldPercent_SUP <- mean(Diamond$TeamGoldPercent_SUP,na.rm = TRUE)
Plat_TeamGoldPercent_SUP <- mean(Plat$TeamGoldPercent_SUP,na.rm = TRUE)
Gold_TeamGoldPercent_SUP <- mean(Gold$TeamGoldPercent_SUP,na.rm = TRUE)
Silver_TeamGoldPercent_SUP <- mean(Silver$TeamGoldPercent_SUP,na.rm = TRUE)
Bronze_TeamGoldPercent_SUP <- mean(Bronze$TeamGoldPercent_SUP,na.rm = TRUE)
AvgTable_TeamGoldPercent_SUP <- cbind(Challenger_TeamGoldPercent_SUP,Master_TeamGoldPercent_SUP,Diamond_TeamGoldPercent_SUP,Plat_TeamGoldPercent_SUP,Gold_TeamGoldPercent_SUP,Silver_TeamGoldPercent_SUP,Bronze_TeamGoldPercent_SUP)
AvgTable_TeamGoldPercent_SUP
```
SUP Team Damage Percentage
```{r}
Challenger_TeamDamagePercent_SUP <- mean(Challenger$TeamDamagePercent_SUP,na.rm = TRUE)
Master_TeamDamagePercent_SUP <- mean(Master$TeamDamagePercent_SUP,na.rm = TRUE)
Diamond_TeamDamagePercent_SUP <- mean(Diamond$TeamDamagePercent_SUP,na.rm = TRUE)
Plat_TeamDamagePercent_SUP <- mean(Plat$TeamDamagePercent_SUP,na.rm = TRUE)
Gold_TeamDamagePercent_SUP <- mean(Gold$TeamDamagePercent_SUP,na.rm = TRUE)
Silver_TeamDamagePercent_SUP <- mean(Silver$TeamDamagePercent_SUP,na.rm = TRUE)
Bronze_TeamDamagePercent_SUP <- mean(Bronze$TeamDamagePercent_SUP,na.rm = TRUE)
AvgTable_TeamDamagePercent_SUP <- cbind(Challenger_TeamDamagePercent_SUP,Master_TeamDamagePercent_SUP,Diamond_TeamDamagePercent_SUP,Plat_TeamDamagePercent_SUP,Gold_TeamDamagePercent_SUP,Silver_TeamDamagePercent_SUP,Bronze_TeamDamagePercent_SUP)
AvgTable_TeamDamagePercent_SUP
```



# Formatting tables
```{r,echo=FALSE}
ADC_Table <- rbind(Avgtable_avg_D_ADC_per_min,Avgtable_avg_DT_ADC_per_min,AvgTable_CS_zeroToTen_ADC,AvgTable_avg_CS_ADC_per_min,Avgtable_avg_H_ADC_per_min,Avgtable_avg_G_ADC_per_min,Avgtable_avg_K_ADC_per_min,Avgtable_avg_De_ADC_per_min,Avgtable_avg_A_ADC_per_min,Avgtable_avg_VW_ADC_per_min,Avgtable_avg_WK_ADC_per_min,Avgtable_avg_WP_ADC_per_min,AvgTable_KC_ADC,AvgTable_KDA_ADC,AvgTable_WinRate_ADC,Avgtable_avg_CC_ADC_per_min,AvgTable_FBContribution_ADC,AvgTable_KillSprees_ADC,AvgTable_LargestKillingSpree_ADC,Avgtable_avg_CSDiffPerMin_zeroToTen_ADC_per_min,Avgtable_avg_XPPerMin_zeroToTen_ADC_per_min,Avgtable_avg_XPPerMin_zeroToThirty_ADC_per_min,Avgtable_avg_XPDiffPerMin_zeroToTen_ADC_per_min,Avgtable_avg_XPDiffPerMin_tenToTwenty_ADC_per_min,Avgtable_avg_XPDiffPerMin_twentyToThirty_ADC_per_min,AvgTable_TeamGoldPercent_ADC,AvgTable_TeamDamagePercent_ADC)
ADC_Table <- as.data.frame(ADC_Table)
names(ADC_Table) <- c("Challenger", "Master", "Diamond", "Platinum", "Gold", "Silver", "Bronze")
r_names <- c("Damage_per_min","Damage_Taken_per_min","CS_zeroToTen","CS_per_min","Healing_per_min","Gold_per_min","Kill_per_min","Death_per_min","Assist_per_min","VisioinWard_per_min","WardsKilled_per_min","WardsPlaced_per_min","KillContribution","KDA","WinRate","CC_per_min","FBContribution","KillSprees","LargestKillingSpree","CS_Difference_per_min(0-10)","XP_per_min(0-10)","XP_per_min(0-30)","XP_Difference_Per_Min(0-10)","XP_Diff_Per_Min(10-20)","XP_Diff_Per_Min(20-30)","Team_Gold_Percent","Team_Damage_Percent")
ADC_Table <- cbind(r_names,ADC_Table)

MID_Table <- rbind(Avgtable_avg_D_MID_per_min,Avgtable_avg_DT_MID_per_min,AvgTable_CS_zeroToTen_MID,AvgTable_avg_CS_MID_per_min,Avgtable_avg_H_MID_per_min,Avgtable_avg_G_MID_per_min,Avgtable_avg_K_MID_per_min,Avgtable_avg_De_MID_per_min,Avgtable_avg_A_MID_per_min,Avgtable_avg_VW_MID_per_min,Avgtable_avg_WK_MID_per_min,Avgtable_avg_WP_MID_per_min,AvgTable_KC_MID,AvgTable_KDA_MID,AvgTable_WinRate_MID,Avgtable_avg_CC_MID_per_min,AvgTable_FBContribution_MID,AvgTable_KillSprees_MID,AvgTable_LargestKillingSpree_MID,Avgtable_avg_CSDiffPerMin_zeroToTen_MID_per_min,Avgtable_avg_XPPerMin_zeroToTen_MID_per_min,Avgtable_avg_XPPerMin_zeroToThirty_MID_per_min,Avgtable_avg_XPDiffPerMin_zeroToTen_MID_per_min,Avgtable_avg_XPDiffPerMin_tenToTwenty_MID_per_min,Avgtable_avg_XPDiffPerMin_twentyToThirty_MID_per_min,AvgTable_TeamGoldPercent_MID,AvgTable_TeamDamagePercent_MID)
MID_Table <- as.data.frame(MID_Table)
names(MID_Table) <- c("Challenger", "Master", "Diamond", "Platinum", "Gold", "Silver", "Bronze")
MID_Table <- cbind(r_names,MID_Table)

TOP_Table <- rbind(Avgtable_avg_D_TOP_per_min,Avgtable_avg_DT_TOP_per_min,AvgTable_CS_zeroToTen_TOP,AvgTable_avg_CS_TOP_per_min,Avgtable_avg_H_TOP_per_min,Avgtable_avg_G_TOP_per_min,Avgtable_avg_K_TOP_per_min,Avgtable_avg_De_TOP_per_min,Avgtable_avg_A_TOP_per_min,Avgtable_avg_VW_TOP_per_min,Avgtable_avg_WK_TOP_per_min,Avgtable_avg_WP_TOP_per_min,AvgTable_KC_TOP,AvgTable_KDA_TOP,AvgTable_WinRate_TOP,Avgtable_avg_CC_TOP_per_min,AvgTable_FBContribution_TOP,AvgTable_KillSprees_TOP,AvgTable_LargestKillingSpree_TOP,Avgtable_avg_CSDiffPerMin_zeroToTen_TOP_per_min,Avgtable_avg_XPPerMin_zeroToTen_TOP_per_min,Avgtable_avg_XPPerMin_zeroToThirty_TOP_per_min,Avgtable_avg_XPDiffPerMin_zeroToTen_TOP_per_min,Avgtable_avg_XPDiffPerMin_tenToTwenty_TOP_per_min,Avgtable_avg_XPDiffPerMin_twentyToThirty_TOP_per_min,AvgTable_TeamGoldPercent_TOP,AvgTable_TeamDamagePercent_TOP)
TOP_Table <- as.data.frame(TOP_Table)
names(TOP_Table) <- c("Challenger", "Master", "Diamond", "Platinum", "Gold", "Silver", "Bronze")
TOP_Table <- cbind(r_names,TOP_Table)

JG_Table <- rbind(Avgtable_avg_D_JG_per_min,Avgtable_avg_DT_JG_per_min,AvgTable_CS_zeroToTen_JG,AvgTable_avg_CS_JG_per_min,Avgtable_avg_H_JG_per_min,Avgtable_avg_G_JG_per_min,Avgtable_avg_K_JG_per_min,Avgtable_avg_De_JG_per_min,Avgtable_avg_A_JG_per_min,Avgtable_avg_VW_JG_per_min,Avgtable_avg_WK_JG_per_min,Avgtable_avg_WP_JG_per_min,AvgTable_KC_JG,AvgTable_KDA_JG,AvgTable_WinRate_JG,Avgtable_avg_CC_JG_per_min,AvgTable_FBContribution_JG,AvgTable_KillSprees_JG,AvgTable_LargestKillingSpree_JG,Avgtable_avg_CSDiffPerMin_zeroToTen_JG_per_min,Avgtable_avg_XPPerMin_zeroToTen_JG_per_min,Avgtable_avg_XPPerMin_zeroToThirty_JG_per_min,Avgtable_avg_XPDiffPerMin_zeroToTen_JG_per_min,Avgtable_avg_XPDiffPerMin_tenToTwenty_JG_per_min,Avgtable_avg_XPDiffPerMin_twentyToThirty_JG_per_min,AvgTable_TeamGoldPercent_JG,AvgTable_TeamDamagePercent_JG)
JG_Table <- as.data.frame(JG_Table)
names(JG_Table) <- c("Challenger", "Master", "Diamond", "Platinum", "Gold", "Silver", "Bronze")
JG_Table <- cbind(r_names,JG_Table)

SUP_Table <- rbind(Avgtable_avg_D_SUP_per_min,Avgtable_avg_DT_SUP_per_min,AvgTable_CS_zeroToTen_SUP,AvgTable_avg_CS_SUP_per_min,Avgtable_avg_H_SUP_per_min,Avgtable_avg_G_SUP_per_min,Avgtable_avg_K_SUP_per_min,Avgtable_avg_De_SUP_per_min,Avgtable_avg_A_SUP_per_min,Avgtable_avg_VW_SUP_per_min,Avgtable_avg_WK_SUP_per_min,Avgtable_avg_WP_SUP_per_min,AvgTable_KC_SUP,AvgTable_KDA_SUP,AvgTable_WinRate_SUP,Avgtable_avg_CC_SUP_per_min,AvgTable_FBContribution_SUP,AvgTable_KillSprees_SUP,AvgTable_LargestKillingSpree_SUP,Avgtable_avg_CSDiffPerMin_zeroToTen_SUP_per_min,Avgtable_avg_XPPerMin_zeroToTen_SUP_per_min,Avgtable_avg_XPPerMin_zeroToThirty_SUP_per_min,Avgtable_avg_XPDiffPerMin_zeroToTen_SUP_per_min,Avgtable_avg_XPDiffPerMin_tenToTwenty_SUP_per_min,Avgtable_avg_XPDiffPerMin_twentyToThirty_SUP_per_min,AvgTable_TeamGoldPercent_SUP,AvgTable_TeamDamagePercent_SUP)
SUP_Table <- as.data.frame(SUP_Table)
names(SUP_Table) <- c("Challenger", "Master", "Diamond", "Platinum", "Gold", "Silver", "Bronze")
SUP_Table <- cbind(r_names,SUP_Table)


write.csv(ADC_Table, file = "ADC_Table")
write.csv(MID_Table, file = "MID_Table")
write.csv(TOP_Table, file = "TOP_Table")
write.csv(JG_Table, file = "JG_Table")
write.csv(SUP_Table, file = "SUP_Table")

```
