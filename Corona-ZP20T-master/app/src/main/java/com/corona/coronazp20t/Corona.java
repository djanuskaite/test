package com.corona.coronazp20t;

import java.io.Serializable;

// serializable kai norim is vieno lango persiusti kita ir tai yra ne bazinis tipas, objektu
// klasems reikia sita nurodyt
public class Corona implements Serializable {
    private String name;
    private String capital;
    private String region;
    private int population;
    private String timezone;

    public Corona(String name, String capital, String region, int population, String timezone) {
        this.name = name;
        this.capital = capital;
        this.region = region;
        this.population = population;
        this.timezone = timezone;
    }

    public Corona(String name, String capital, String region, int population) {
        this.name = name;
        this.capital = capital;
        this.region = region;
        this.population = population;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCapital() {
        return capital;
    }

    public void setCapital(String capital) {
        this.capital = capital;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public int getPopulation() {
        return population;
    }

    public void setPopulation(int population) {
        this.population = population;
    }

    public String getTimezone() {
        return timezone;
    }

    public void setTimezone(String timezone) {
        this.timezone = timezone;
    }

    @Override
    public String toString() {
        return "Country{" +
                "name='" + name + '\'' +
                ", capital='" + capital + '\'' +

                ", population=" + population +
                ", timezone=" + timezone +
                '}';
    }
}
