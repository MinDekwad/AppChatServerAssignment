--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

-- Started on 2022-05-07 23:29:01

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 16402)
-- Name: chatevent; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chatevent (
    id integer NOT NULL,
    sender text NOT NULL,
    message text NOT NULL,
    "roomId" integer NOT NULL,
    datetime bigint NOT NULL
);


ALTER TABLE public.chatevent OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16395)
-- Name: room; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.room (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.room OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16409)
-- Name: typeorm_metadata; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.typeorm_metadata (
    type character varying NOT NULL,
    database character varying,
    schema character varying,
    "table" character varying,
    name character varying,
    value text
);


ALTER TABLE public.typeorm_metadata OWNER TO postgres;

--
-- TOC entry 3174 (class 2606 OID 16408)
-- Name: chatevent chatEvent_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chatevent
    ADD CONSTRAINT "chatEvent_pkey" PRIMARY KEY (id);


--
-- TOC entry 3172 (class 2606 OID 16399)
-- Name: room room_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.room
    ADD CONSTRAINT room_pkey PRIMARY KEY (id);


-- Completed on 2022-05-07 23:29:02

--
-- PostgreSQL database dump complete
--

