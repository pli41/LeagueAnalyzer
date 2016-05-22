---
title: "LOL 05/03"
author: "Ziyu Guo"
date: "2016/05/03"
output: html_document
---

```{r, echo=FALSE,warning=FALSE}
setwd("~/DeskTOP")
library(readr)
library(dplyr)
Challenger <- read_csv("~/DeskTOP/CSV/CHALLENGER/AnalyzedData(CHALLENGER)_1462152012888.csv")
Master <- read_csv("~/DeskTOP/CSV/MASTER/AnalyzedData(MASTER)_1462223881679.csv")
Diamond1 <- read_csv("~/DeskTOP/CSV/DIAMOND/I/AnalyzedData(DIAMONDI)_1462231174407.csv")
Diamond2 <- read_csv("~/Desktop/CSV/DIAMOND/II/AnalyzedData(DIAMONDII)_1462231174407.csv")
Diamond3 <- read_csv("~/Desktop/CSV/DIAMOND/III/AnalyzedData(DIAMONDIII)_1462231174407.csv")
Diamond4 <- read_csv("~/Desktop/CSV/DIAMOND/IV/AnalyzedData(DIAMONDIV)_1462231174407.csv")
Diamond5 <- read_csv("~/Desktop/CSV/DIAMOND/V/AnalyzedData(DIAMONDV)_1462231174407.csv")
Plat1 <- read_csv("~/Desktop/CSV/PLATINUM/I/AnalyzedData(PLATINUMI)_1462218834101.csv")
Plat2 <- read_csv("~/Desktop/CSV/PLATINUM/II/AnalyzedData(PLATINUMII)_1462218834101.csv")
Plat3 <- read_csv("~/Desktop/CSV/PLATINUM/III/AnalyzedData(PLATINUMIII)_1462218834101.csv")
Plat4 <- read_csv("~/Desktop/CSV/PLATINUM/IV/AnalyzedData(PLATINUMIV)_1462218834101.csv")
Plat5 <- read_csv("~/Desktop/CSV/PLATINUM/V/AnalyzedData(PLATINUMV)_1462218834101.csv")
Gold1 <- read_csv("~/Desktop/CSV/GOLD/I/AnalyzedData(GOLDI)_1462212748109.csv")
Gold2 <- read_csv("~/Desktop/CSV/GOLD/II/AnalyzedData(GOLDII)_1462212748109.csv")
Gold3 <- read_csv("~/Desktop/CSV/GOLD/III/AnalyzedData(GOLDIII)_1462212748109.csv")
Gold4 <- read_csv("~/Desktop/CSV/GOLD/IV/AnalyzedData(GOLDIV)_1462212748109.csv")
Gold5 <- read_csv("~/Desktop/CSV/GOLD/V/AnalyzedData(GOLDV)_1462212748109.csv")
Silver1 <- read_csv("~/Desktop/CSV/SILVER/I/AnalyzedData(SILVERI)_1462200213506.csv")
Silver2 <- read_csv("~/Desktop/CSV/SILVER/II/AnalyzedData(SILVERII)_1462200213506.csv")
Silver3 <- read_csv("~/Desktop/CSV/SILVER/III/AnalyzedData(SILVERIII)_1462200213506.csv")
Silver4 <- read_csv("~/Desktop/CSV/SILVER/IV/AnalyzedData(SILVERIV)_1462200213506.csv")
Silver5 <- read_csv("~/Desktop/CSV/SILVER/V/AnalyzedData(SILVERV)_1462200213506.csv")
Bronze1 <- read_csv("~/Desktop/CSV/BRONZE/I/AnalyzedData(BRONZEI)_1462166374133.csv")
Bronze2 <- read_csv("~/Desktop/CSV/BRONZE/II/AnalyzedData(BRONZEII)_1462166374133.csv")
Bronze3 <- read_csv("~/Desktop/CSV/BRONZE/III/AnalyzedData(BRONZEIII)_1462166374133.csv")
Bronze4 <- read_csv("~/Desktop/CSV/BRONZE/IV/AnalyzedData(BRONZEIV)_1462166374133.csv")
Bronze5 <- read_csv("~/Desktop/CSV/BRONZE/V/AnalyzedData(BRONZEV)_1462166374133.csv")
################################# Merge data by Tier ###################################
Diamond <-rbind(Diamond5,Diamond4,Diamond3,Diamond2,Diamond1)
Plat <- rbind(Plat1,Plat2,Plat3,Plat4,Plat5)
Gold <- rbind(Gold1,Gold2,Gold3,Gold4,Gold5)
Silver <- rbind(Silver1,Silver2,Silver3,Silver4,Silver5)
Bronze <- rbind(Bronze1,Bronze2,Bronze3,Bronze4,Bronze5)
################################## convert 0 into NA ###################################
Challenger[, 27:111][Challenger[, 27:111] == 0] <- NA
Master[, 27:111][Master[, 27:111] == 0] <- NA
Diamond[, 27:111][Diamond[, 27:111] == 0] <- NA
Plat[, 27:111][Plat[, 27:111] == 0] <- NA
Gold[, 27:111][Gold[, 27:111] == 0] <- NA
Silver[, 27:111][Silver[, 27:111] == 0] <- NA
Bronze[, 27:111][Bronze[, 27:111] == 0] <- NA
```
# ADC
ADC Damage Dealt Per Minute
```{r,echo=FALSE}
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
ADC Damage Taken Per Minute
```{r,echo=FALSE}
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
ADC CS From 0-10 Min
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
ADC Assist Per minute
```{r,echo=FALSE}
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
ADC Vision wards Placed per min
```{r,echo=FALSE}
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
ADC Wards Killed Per min
```{r,echo=FALSE}
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
ADC Wards placed per min
```{r,echo=FALSE}
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
ADC Kill Contribution Per min 
```{r,echo=FALSE}
Challenger_avg_KC_ADC_per_min <- mean(Challenger$KC_ADC/Challenger$PlayedLength_ADC,na.rm = TRUE)*60
Master_avg_KC_ADC_per_min <- mean(Master$KC_ADC/Master$PlayedLength_ADC,na.rm = TRUE)*60
Diamond_avg_KC_ADC_per_min <- mean(Diamond$KC_ADC/Diamond$PlayedLength_ADC,na.rm = TRUE)*60
Plat_avg_KC_ADC_per_min <- mean(Plat$KC_ADC/Plat$PlayedLength_ADC,na.rm = TRUE)*60
Gold_avg_KC_ADC_per_min <- mean(Gold$KC_ADC/Gold$PlayedLength_ADC,na.rm = TRUE)*60
Silver_avg_KC_ADC_per_min <- mean(Silver$KC_ADC/Silver$PlayedLength_ADC,na.rm = TRUE)*60
Bronze_avg_KC_ADC_per_min <- mean(Bronze$KC_ADC/Bronze$PlayedLength_ADC,na.rm = TRUE)*60
Avgtable_avg_KC_ADC_per_min <- cbind(Challenger_avg_KC_ADC_per_min,Master_avg_KC_ADC_per_min,Diamond_avg_KC_ADC_per_min,Plat_avg_KC_ADC_per_min,Gold_avg_KC_ADC_per_min,Silver_avg_KC_ADC_per_min,Bronze_avg_KC_ADC_per_min)
Avgtable_avg_KC_ADC_per_min
```
ADC average KDA
```{r,echo=FALSE}
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
ADC average WinRate
```{r,echo=FALSE}
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
ADC CC Duration per min
```{r,echo=FALSE}
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
# MID
MID Damage Dealt Per Minute
```{r,echo=FALSE}
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
MID Damage Taken Per Minute
```{r,echo=FALSE}
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
MID CS From 0-10 Min
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
MID Assist Per minute
```{r,echo=FALSE}
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
MID Vision wards Placed per min
```{r,echo=FALSE}
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
MID Wards Killed Per min
```{r,echo=FALSE}
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
MID Wards placed per min
```{r,echo=FALSE}
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
MID Kill Contribution Per min 
```{r,echo=FALSE}
Challenger_avg_KC_MID_per_min <- mean(Challenger$KC_MID/Challenger$PlayedLength_MID,na.rm = TRUE)*60
Master_avg_KC_MID_per_min <- mean(Master$KC_MID/Master$PlayedLength_MID,na.rm = TRUE)*60
Diamond_avg_KC_MID_per_min <- mean(Diamond$KC_MID/Diamond$PlayedLength_MID,na.rm = TRUE)*60
Plat_avg_KC_MID_per_min <- mean(Plat$KC_MID/Plat$PlayedLength_MID,na.rm = TRUE)*60
Gold_avg_KC_MID_per_min <- mean(Gold$KC_MID/Gold$PlayedLength_MID,na.rm = TRUE)*60
Silver_avg_KC_MID_per_min <- mean(Silver$KC_MID/Silver$PlayedLength_MID,na.rm = TRUE)*60
Bronze_avg_KC_MID_per_min <- mean(Bronze$KC_MID/Bronze$PlayedLength_MID,na.rm = TRUE)*60
Avgtable_avg_KC_MID_per_min <- cbind(Challenger_avg_KC_MID_per_min,Master_avg_KC_MID_per_min,Diamond_avg_KC_MID_per_min,Plat_avg_KC_MID_per_min,Gold_avg_KC_MID_per_min,Silver_avg_KC_MID_per_min,Bronze_avg_KC_MID_per_min)
Avgtable_avg_KC_MID_per_min
```
MID average KDA
```{r,echo=FALSE}
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
MID average WinRate
```{r,echo=FALSE}
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
MID CC Duration per min
```{r,echo=FALSE}
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
# TOP
TOP Damage Dealt Per Minute
```{r,echo=FALSE}
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
TOP Damage Taken Per Minute
```{r,echo=FALSE}
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
TOP CS From 0-10 Min
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
TOP Assist Per minute
```{r,echo=FALSE}
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
TOP Vision wards Placed per min
```{r,echo=FALSE}
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
TOP Wards Killed Per min
```{r,echo=FALSE}
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
TOP Wards placed per min
```{r,echo=FALSE}
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
TOP Kill Contribution Per min 
```{r,echo=FALSE}
Challenger_avg_KC_TOP_per_min <- mean(Challenger$KC_TOP/Challenger$PlayedLength_TOP,na.rm = TRUE)*60
Master_avg_KC_TOP_per_min <- mean(Master$KC_TOP/Master$PlayedLength_TOP,na.rm = TRUE)*60
Diamond_avg_KC_TOP_per_min <- mean(Diamond$KC_TOP/Diamond$PlayedLength_TOP,na.rm = TRUE)*60
Plat_avg_KC_TOP_per_min <- mean(Plat$KC_TOP/Plat$PlayedLength_TOP,na.rm = TRUE)*60
Gold_avg_KC_TOP_per_min <- mean(Gold$KC_TOP/Gold$PlayedLength_TOP,na.rm = TRUE)*60
Silver_avg_KC_TOP_per_min <- mean(Silver$KC_TOP/Silver$PlayedLength_TOP,na.rm = TRUE)*60
Bronze_avg_KC_TOP_per_min <- mean(Bronze$KC_TOP/Bronze$PlayedLength_TOP,na.rm = TRUE)*60
Avgtable_avg_KC_TOP_per_min <- cbind(Challenger_avg_KC_TOP_per_min,Master_avg_KC_TOP_per_min,Diamond_avg_KC_TOP_per_min,Plat_avg_KC_TOP_per_min,Gold_avg_KC_TOP_per_min,Silver_avg_KC_TOP_per_min,Bronze_avg_KC_TOP_per_min)
Avgtable_avg_KC_TOP_per_min
```
TOP average KDA
```{r,echo=FALSE}
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
TOP average WinRate
```{r,echo=FALSE}
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
TOP CC Duration per min
```{r,echo=FALSE}
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
# JG
JG Damage Dealt Per Minute
```{r,echo=FALSE}
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
JG Damage Taken Per Minute
```{r,echo=FALSE}
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
JG CS From 0-10 Min
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
JG Assist Per minute
```{r,echo=FALSE}
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
JG Vision wards Placed per min
```{r,echo=FALSE}
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
JG Wards Killed Per min
```{r,echo=FALSE}
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
JG Wards placed per min
```{r,echo=FALSE}
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
JG Kill Contribution Per min 
```{r,echo=FALSE}
Challenger_avg_KC_JG_per_min <- mean(Challenger$KC_JG/Challenger$PlayedLength_JG,na.rm = TRUE)*60
Master_avg_KC_JG_per_min <- mean(Master$KC_JG/Master$PlayedLength_JG,na.rm = TRUE)*60
Diamond_avg_KC_JG_per_min <- mean(Diamond$KC_JG/Diamond$PlayedLength_JG,na.rm = TRUE)*60
Plat_avg_KC_JG_per_min <- mean(Plat$KC_JG/Plat$PlayedLength_JG,na.rm = TRUE)*60
Gold_avg_KC_JG_per_min <- mean(Gold$KC_JG/Gold$PlayedLength_JG,na.rm = TRUE)*60
Silver_avg_KC_JG_per_min <- mean(Silver$KC_JG/Silver$PlayedLength_JG,na.rm = TRUE)*60
Bronze_avg_KC_JG_per_min <- mean(Bronze$KC_JG/Bronze$PlayedLength_JG,na.rm = TRUE)*60
Avgtable_avg_KC_JG_per_min <- cbind(Challenger_avg_KC_JG_per_min,Master_avg_KC_JG_per_min,Diamond_avg_KC_JG_per_min,Plat_avg_KC_JG_per_min,Gold_avg_KC_JG_per_min,Silver_avg_KC_JG_per_min,Bronze_avg_KC_JG_per_min)
Avgtable_avg_KC_JG_per_min
```
JG average KDA
```{r,echo=FALSE}
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
JG average WinRate
```{r,echo=FALSE}
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
JG CC Duration per min
```{r,echo=FALSE}
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
# SUP
SUP Damage Dealt Per Minute
```{r,echo=FALSE}
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
SUP Damage Taken Per Minute
```{r,echo=FALSE}
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
SUP CS From 0-10 Min
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
```{r,echo=FALSE}
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
SUP Assist Per minute
```{r,echo=FALSE}
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
SUP Vision wards Placed per min
```{r,echo=FALSE}
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
SUP Wards Killed Per min
```{r,echo=FALSE}
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
SUP Wards placed per min
```{r,echo=FALSE}
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
SUP Kill Contribution Per min 
```{r,echo=FALSE}
Challenger_avg_KC_SUP_per_min <- mean(Challenger$KC_SUP/Challenger$PlayedLength_SUP,na.rm = TRUE)*60
Master_avg_KC_SUP_per_min <- mean(Master$KC_SUP/Master$PlayedLength_SUP,na.rm = TRUE)*60
Diamond_avg_KC_SUP_per_min <- mean(Diamond$KC_SUP/Diamond$PlayedLength_SUP,na.rm = TRUE)*60
Plat_avg_KC_SUP_per_min <- mean(Plat$KC_SUP/Plat$PlayedLength_SUP,na.rm = TRUE)*60
Gold_avg_KC_SUP_per_min <- mean(Gold$KC_SUP/Gold$PlayedLength_SUP,na.rm = TRUE)*60
Silver_avg_KC_SUP_per_min <- mean(Silver$KC_SUP/Silver$PlayedLength_SUP,na.rm = TRUE)*60
Bronze_avg_KC_SUP_per_min <- mean(Bronze$KC_SUP/Bronze$PlayedLength_SUP,na.rm = TRUE)*60
Avgtable_avg_KC_SUP_per_min <- cbind(Challenger_avg_KC_SUP_per_min,Master_avg_KC_SUP_per_min,Diamond_avg_KC_SUP_per_min,Plat_avg_KC_SUP_per_min,Gold_avg_KC_SUP_per_min,Silver_avg_KC_SUP_per_min,Bronze_avg_KC_SUP_per_min)
Avgtable_avg_KC_SUP_per_min
```
SUP average KDA
```{r,echo=FALSE}
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
SUP average WinRate
```{r,echo=FALSE}
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
SUP CC Duration per min
```{r,echo=FALSE}
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
